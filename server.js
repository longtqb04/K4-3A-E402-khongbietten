import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {randomUUID} from 'node:crypto';
import {answerQuestion} from './src/assistant.js';
import {knowledge} from './src/knowledge.js';
import {createStore} from './src/store.js';
import {verifyDiscord,discordRequest,discordAnswer,handoff} from './src/discord.js';
const store=createStore();const sessions=new Map(),limits=new Map(),seen=new Map();
const json=(res,status,data)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});res.end(JSON.stringify(data));};
async function body(req){const chunks=[];let size=0;for await(const chunk of req){size+=chunk.length;if(size>16384)throw new Error('body_too_large');chunks.push(chunk);}return Buffer.concat(chunks);}
function owner(req,res){const loopback=['127.0.0.1','::1','::ffff:127.0.0.1'].includes(req.socket.remoteAddress);if(!loopback&&(!process.env.WEB_API_TOKEN||req.headers.authorization!==`Bearer ${process.env.WEB_API_TOKEN}`))throw new Error('unauthorized');const origin=req.headers.origin;if(origin&&new URL(origin).host!==req.headers.host)throw new Error('unauthorized');let id=/kute=([a-f0-9-]+)/.exec(req.headers.cookie||'')?.[1];if(!sessions.has(id)){id=randomUUID();sessions.set(id,Date.now());res.setHeader('Set-Cookie',`kute=${id}; HttpOnly; SameSite=Strict; Path=/`);}return id;}
const ticketText=t=>t.state==='sent'?`Đã gửi ticket ${t.id} đến kênh TA.`:`Đã lưu ticket ${t.id} trên máy chủ (${t.state}). Chưa gửi đến Discord TA.`;
async function handleDiscord(i){const who=`discord:${i.member?.user?.id||i.user?.id}`;let payload;
 if(i.type===2){const q=i.data.options?.find(o=>o.name==='cau-hoi')?.value;if(typeof q!=='string'||q.length>2000)throw new Error('invalid_question');const result=await answerQuestion(q);const id=store.save(who,q,result);payload=discordAnswer(result,id);}
 else{const [action,id]=i.data.custom_id.split(':');const row=store.get(id,who);if(!row)payload={content:'Bạn chỉ có thể xử lý câu hỏi của mình.'};else if(action==='solved'){store.feedback(id,'solved');payload={content:'Đã lưu phản hồi: đã giải quyết.'};}else if(action==='ticket')payload={content:ticketText(await handoff(store,row))};else payload={content:'Thao tác không hợp lệ.'};}
 await discordRequest(`webhooks/${i.application_id}/${i.token}/messages/@original`,{...payload,allowed_mentions:{parse:[]}},'PATCH',false);
}
export const server=http.createServer(async(req,res)=>{try{
 const url=new URL(req.url,'http://localhost');
 if(url.pathname==='/discord/interactions'&&req.method==='POST'){
 const raw=await body(req);if(!verifyDiscord(raw,req.headers))return json(res,401,{error:'invalid_signature'});const i=JSON.parse(raw);
 if(i.type===1)return json(res,200,{type:1});if(process.env.DISCORD_GUILD_ID&&i.guild_id!==process.env.DISCORD_GUILD_ID)return json(res,403,{error:'wrong_guild'});
 if(![2,3].includes(i.type))return json(res,400,{error:'unsupported_interaction'});
 json(res,200,{type:5,data:{flags:64}});if(seen.has(i.id))return;seen.set(i.id,Date.now());void handleDiscord(i).catch(()=>discordRequest(`webhooks/${i.application_id}/${i.token}/messages/@original`,{content:'Không thể xử lý. Vui lòng thử lại.',allowed_mentions:{parse:[]}},'PATCH',false).catch(()=>{}));return;}
 if(req.method==='GET'&&['/','/app.js'].includes(url.pathname)){const file=url.pathname==='/'?'index.html':'app.js';res.writeHead(200,{'Content-Type':file.endsWith('html')?'text/html; charset=utf-8':'text/javascript; charset=utf-8','X-Content-Type-Options':'nosniff'});return res.end(await readFile(file));}
 const who=owner(req,res);
 if(req.method==='GET'&&url.pathname==='/api/health')return json(res,200,{ai:!!process.env.OPENAI_API_KEY,discord:!!process.env.DISCORD_PUBLIC_KEY,ta:!!process.env.DISCORD_TA_CHANNEL_ID,sourceCount:knowledge.length});
 if(req.method==='GET'&&url.pathname.startsWith('/api/sources/')){const doc=knowledge.find(d=>d.id===url.pathname.split('/').pop());return json(res,doc?200:404,doc||{error:'not_found'});}
 if(req.method!=='POST')return json(res,404,{error:'not_found'});
 const bucket=limits.get(who)||{n:0,at:Date.now()};if(Date.now()-bucket.at>60000){bucket.n=0;bucket.at=Date.now();}if(++bucket.n>15)return json(res,429,{error:'Bạn đã gửi quá nhanh; thử lại sau một phút.'});limits.set(who,bucket);
 if(!req.headers['content-type']?.startsWith('application/json'))return json(res,415,{error:'json_required'});
 const data=JSON.parse((await body(req)).toString());
 if(url.pathname==='/api/ask'){if(typeof data.question!=='string'||!data.question.trim()||data.question.length>2000)return json(res,400,{error:'Câu hỏi phải có 1–2000 ký tự.'});let q=data.question.trim();if(data.previousId){const prev=store.get(data.previousId,who);if(prev?.result.decision==='CLARIFY')q=`${prev.question}\nBổ sung: ${q}`.slice(-2000);}const result=await answerQuestion(q);return json(res,200,{...result,id:store.save(who,q,result)});}
 const row=store.get(data.id,who);if(!row)return json(res,404,{error:'Không tìm thấy câu hỏi của bạn.'});
 if(url.pathname==='/api/tickets'){const t=await handoff(store,row);return json(res,200,{...t,message:ticketText(t)});}
 if(url.pathname==='/api/feedback'&&['solved','incorrect'].includes(data.value)){store.feedback(data.id,data.value);return json(res,200,{saved:true});}
 json(res,404,{error:'not_found'});
 }catch(e){json(res,e.message==='unauthorized'?401:e.message==='body_too_large'?413:400,{error:e.message==='unauthorized'?'unauthorized':'Yêu cầu không hợp lệ hoặc không thể lưu dữ liệu.'});}});
setInterval(()=>{const now=Date.now();for(const map of [sessions,seen])for(const [k,v] of map)if(now-v>86400000)map.delete(k);for(const [k,v] of limits)if(now-v.at>60000)limits.delete(k);},60000).unref();
server.listen(Number(process.env.PORT||3000),process.env.HOST||'127.0.0.1',()=>console.log(`Kute: http://${process.env.HOST||'127.0.0.1'}:${process.env.PORT||3000}`));

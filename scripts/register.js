import {discordRequest} from '../src/discord.js';
for(const key of ['DISCORD_APPLICATION_ID','DISCORD_GUILD_ID','DISCORD_BOT_TOKEN'])if(!process.env[key])throw new Error(`Thiếu ${key}`);
// POST upserts only our named command; never overwrites other application commands.
await discordRequest(`applications/${process.env.DISCORD_APPLICATION_ID}/guilds/${process.env.DISCORD_GUILD_ID}/commands`,{name:'hoi',description:'Hỏi trợ lý kỹ thuật AI Thực chiến',options:[{type:3,name:'cau-hoi',description:'Câu hỏi, bước gặp lỗi và thông báo lỗi (không gửi bí mật)',required:true,max_length:2000}]});
console.log('Đã đăng ký /hoi.');

import {mkdir,writeFile} from 'node:fs/promises';
import {answerQuestion} from '../src/assistant.js';
const cases=[
 ['CVAT OPA báo 500 health bundles ngay sau docker compose up -d. Vì sao?', 'M12802'],
 ['CVAT lỗi OPA health bundles ngay lúc khởi động thì nên chờ khoảng bao lâu trước khi kiểm tra lại?', 'M12802'],
 ['Lệnh kiểm tra health check của cvat_server trong Docker là gì?', 'M29806'],
 ['Theo hướng dẫn CVAT trong dữ liệu, trước khi chạy health check cần sleep bao nhiêu giây?', 'M29806'],
 ['Theo trao đổi setup CVAT trong dữ liệu, tag phiên bản CVAT được nhắc đến là gì?', 'M17439'],
 ['Theo trao đổi setup CVAT v2.74.1 trong dữ liệu, image OPA dùng tag nào?', 'M17439'],
 ['Phoenix không vào được bằng link trong mail; theo trao đổi trong dữ liệu nên lấy link ở đâu?', 'M28576'],
 ['Phoenix nên mở link trong thông báo hay link trong email theo hướng dẫn trong dữ liệu?', 'M28576'],
];
const rows=[];
for(const [question,expectedSource] of cases){
 const result=await answerQuestion(question);
 rows.push({question,expectedSource,...result});
 console.log(JSON.stringify({case:rows.length,question,expectedSource,decision:result.decision,mode:result.mode,answer:result.answer,sourceIds:result.sources.map(s=>s.id),errorCode:result.errorCode}));
 if(result.mode==='unavailable'||result.mode==='provider-error')break;
}
await mkdir('eval/demo-checks',{recursive:true});
const file=`eval/demo-checks/${new Date().toISOString().replace(/[:.]/g,'-')}.json`;
await writeFile(file,JSON.stringify({created:new Date().toISOString(),totalPlanned:cases.length,rows},null,2));
console.log(file);

# Kute — Trợ lý Discord AI Thực chiến

Working prototype: câu hỏi → FOUND / CLARIFY / NOT_FOUND → nguồn → phản hồi hoặc ticket TA. Node.js >=22.13, không cần cài thư viện npm.

## Chạy local

Sao chép `.env.example` thành `.env`, điền OPENAI_API_KEY (hoặc dùng biến môi trường). Chạy `npm start`, mở http://127.0.0.1:3000. Không mở trực tiếp index.html. Mặc định model gpt-4.1-mini; cấu hình OPENAI_MODEL để đổi. Thiếu key/lỗi API sẽ thông báo thật, không giả lập AI.

## Kết nối Discord

Tạo ứng dụng trong Developer Portal, điền DISCORD_APPLICATION_ID, DISCORD_PUBLIC_KEY, DISCORD_BOT_TOKEN, DISCORD_GUILD_ID và DISCORD_TA_CHANNEL_ID trong `.env`. Mời bot với scopes bot + applications.commands; chỉ cần View Channel và Send Messages tại kênh TA, không cần Administrator/Message Content intent. Chạy `npm run discord:register` để upsert riêng `/hoi`.

Expose **chỉ `/discord/interactions`** qua HTTPS reverse proxy vào server local, rồi đặt Interactions Endpoint URL. Không proxy công khai giao diện/API local chứa dữ liệu câu hỏi. Endpoint xác thực Ed25519, timestamp, guild, ACK trước AI, trả lời ephemeral. Nút chỉ xử lý câu hỏi của chính người gửi. Dùng `/hoi cau-hoi:...`; khi được hỏi làm rõ, gửi lại lệnh đầy đủ ngữ cảnh.

Ticket lưu SQLite trước, chỉ báo đã gửi khi Discord API thành công. Trạng thái local/delivery-failed có thể bấm lại. Chưa xác minh end-to-end với guild thật vì chưa có cấu hình Discord.

## Kiểm thử và demo

- `npm test`: 8 kiểm thử kỹ thuật.
- `npm run eval`: 20 câu, gọi AI thật cho câu có nguồn; log ở `eval/results-live.json`.
- `npm run eval -- --offline`: kiểm tra routing/tra cứu, không tính AI thật.
- `npm run evidence`: đọc data pack local, tái tạo số đếm và 5 ví dụ.

Xem `eval/REPORT.md` và `docs/DEMO.md`.

## Phạm vi và giới hạn

4 trích đoạn được đối chiếu với data/k4_messages.csv ngày 12–14/09/2026. Vai trò người viết không xác minh được; đây là nguồn cộng đồng, không phải chính sách. Link Discord đã ẩn danh nên UI liên kết trích đoạn `/api/sources/:id`, không bịa doc URL. Bổ sung tài liệu chính thức trước khi mở rộng FAQ trong src/knowledge.js. Quy định từ bot cũ không được dùng làm nguồn chuẩn.

API key chỉ ở server. Chỉ câu hỏi và tối đa 3 trích đoạn gửi tới OpenAI, store:false. SQLite tại runtime/kute.sqlite lưu câu hỏi/kết quả/ticket/feedback (gitignored); hạn chế quyền đọc và đặt thời hạn lưu trước vận hành. Web có nối một lượt bổ sung CLARIFY. Chưa có dashboard TA, retry nền, multi-instance queue, hoặc hội thoại nhiều lượt trên Discord. Retrieval từ khóa có giới hạn với cách diễn đạt mới. Non-loopback API cần WEB_API_TOKEN; trình duyệt hiện chỉ hỗ trợ local session.

## Tài liệu API

[OpenAI Responses](https://developers.openai.com/api/reference/typescript/resources/beta/subresources/responses/methods/create) · [Discord interactions](https://docs.discord.com/developers/interactions/receiving-and-responding)

# Đặc tả triển khai từ canvas

Lát cắt: học viên gặp lỗi cài đặt CVAT hỏi qua /hoi → hệ thống quyết định FOUND / CLARIFY / NOT_FOUND → hướng dẫn có nguồn hoặc ticket TA. Không sửa canvas gốc hay điền giả dữ liệu khảo sát vào spec template.

Thật: OpenAI Responses, 4 trích đoạn nguồn đối chiếu, giao diện web gọi backend, SQLite, endpoint Discord xác thực chữ ký, lệnh đăng ký /hoi, gửi TA khi có cấu hình.

Chưa xác minh: bot trên server Discord thật, phản hồi willing users, URL tài liệu gốc đã bị ẩn danh. Sidebar là minh họa kênh, không phải kết nối Discord trực tiếp.

Nguyên tắc UX: nói rõ khả năng/phạm vi, hiển thị nguồn, hỏi lại khi thiếu thông tin, cho sửa/phản hồi chưa đúng, giữ quyền chuyển TA ở người dùng, báo lỗi provider thay vì giả thành công. Non-goals: chấm điểm, quyết định gia hạn, tự sửa máy học viên.

| Lỗi / tình huống | Hành vi |
|---|---|
| Lỗi OPA 500 lúc khởi động | FOUND khi trích đoạn phù hợp |
| Chỉ nói CVAT bị lỗi | CLARIFY |
| Xin gia hạn hoặc điểm số | NOT_FOUND, có nút TA |
| Hỏi quy định chỉ bot cũ từng trả lời | Không dùng bot cũ làm nguồn chuẩn |
| Prompt injection trong câu hỏi/nguồn | Nội dung là dữ liệu, không là chỉ thị |
| Provider timeout/429 | NOT_FOUND kèm provider-error, không giả AI |
| Citation ngoài tập truy xuất | Bác kết quả model |
| Ticket gửi Discord lỗi | Giữ delivery-failed, cho thử lại |
| Người khác bấm nút | Kiểm tra owner |
| Câu trả lời chưa đúng | Lưu feedback, cho chuyển TA |

Ngữ cảnh web hỗ trợ một lượt bổ sung sau CLARIFY. Discord yêu cầu gửi lại /hoi đầy đủ. Nguồn cộng đồng cũ có thể hết hiệu lực; mở rộng phải bổ sung tài liệu chính thức được TA duyệt. Chưa có số khảo sát; hai willing users trong canvas chưa được liên hệ.

Phân công theo canvas: Dương spec/prototype; Trí evidence; Long AI call; Trường evaluation/demo/pitch. Artifacts hiện có giúp từng bạn tiếp nhận; không tự liên hệ người khác.

# Kịch bản quay thao tác thật 30 giây

Chuẩn bị server có OPENAI_API_KEY và mạng. Không quay khóa hoặc dữ liệu riêng.

0–5s: nhập “CVAT OPA báo 500 health bundles ngay sau docker compose up -d”.

5–15s: gửi, chờ AI thật; thấy openai, FOUND và M12802. Mở trích đoạn nguồn.

15–22s: hỏi “CVAT bị lỗi” để thấy CLARIFY hoặc “Xin gia hạn bài CVAT” để thấy NOT_FOUND.

22–30s: Chuyển TA. Chưa cấu hình Discord thì phải quay đúng “đã lưu trên máy chủ, chưa gửi Discord”. Có cấu hình thì kiểm tra kênh TA trước khi quay.

Nếu mạng chậm, chỉ quay một câu FOUND + nguồn. Không ghép phản hồi giả. Báo cáo 20 câu riêng ở eval/REPORT.md; bộ đếm UI không phải độ chính xác.

Luồng: Web hoặc Discord /hoi → kiểm tra đầu vào → guardrail → tìm tối đa 3 nguồn → OpenAI → kiểm tra ID nguồn → ba nhánh quyết định → SQLite → phản hồi hoặc chuyển TA.

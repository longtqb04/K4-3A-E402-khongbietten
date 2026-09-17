# Đánh giá 17/09/2026

Bộ 20 câu tự biên soạn, bám nguồn và failure modes; chưa phải holdout độc lập. Quality bar đề xuất: ≥85% đúng nhánh và nguồn, không khẳng định khi thiếu nguồn; TA phải duyệt nội dung trước rollout.

Live: **20/20 đúng nhánh và ID nguồn kỳ vọng**, với **8 phản hồi OpenAI thật**, 4 CLARIFY và 8 NOT_FOUND qua guardrail. Chi tiết câu trả lời/thời gian: results-live.json. Lượt đầu bị chặn mạng: 12/20, không AI thành công; chạy lại có mạng cho kết quả hiện tại.

Rà nội dung bởi trợ lý xây dựng, chưa phải TA độc lập: **19/20 chấp nhận được trong bộ này**. Case 6 hiểu sai cách diễn đạt “image tag” thành “tag hình ảnh”, dù phiên bản v2.74.1 đúng. Cần cải thiện và đánh giá lại; không gọi 20/20 nhãn là độ chính xác nội dung 100%.

8/8 kiểm thử kỹ thuật qua. Chưa kiểm thử Discord guild thật. Chưa có video, chỉ có kịch bản quay.

Evidence: 1.092 tin, 779 người, 313 bot. Tin người chứa từ khóa: CVAT/OPA/Docker 21, Phoenix 28, Standup 58, điểm danh/Zoom 49, team 65. Các nhóm chồng lắp; **không phải số câu hỏi lặp đã gán nhãn**. evidence.json chứa phương pháp và 5 ví dụ để kiểm lại.

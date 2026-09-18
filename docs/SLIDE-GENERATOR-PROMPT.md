# Nội dung dán vào công cụ tạo slide

Hãy tạo đúng 6 slide tiếng Việt cho bài pitching 6 phút của dự án Kute, nhóm Không Biết Tên, lớp K4-3A, phòng E402, Chương trình Đào tạo Nhân tài AI Thực chiến. Không thêm slide bìa riêng hoặc slide cảm ơn thứ bảy. Đối tượng nghe là giám khảo hackathon và học viên, ưu tiên chuỗi quyết định sản phẩm, bằng chứng và demo.

## Phong cách và cách dùng nội dung

- Tỷ lệ 16:9, thiết kế gọn, nền tối xanh than, chữ sáng, điểm nhấn xanh ngọc. Dùng màu vàng cho giới hạn và màu đỏ nhạt cho lỗi.
- Tiêu đề ngắn, chữ lớn, đủ khoảng trắng. Mỗi slide có một ý chính. Không nhồi toàn bộ phần ghi chú lên màn hình.
- Giữ bảng và chữ có thể chỉnh sửa. Đặt nguồn ngắn ở chân slide. Không tự tạo ảnh chụp giao diện hoặc lời người dùng như bằng chứng thật. Có thể dùng sơ đồ minh họa và ghi rõ đó là minh họa.
- Nếu minh họa giao diện, chỉ có kênh ho-tro-ky-thuat. Không thêm thong-bao, hoi-dap-lab hoặc ticket-ta vì đội đã bỏ khỏi UI.
- Đưa thời lượng, phân vai, lời giải thích và thao tác demo vào speaker notes. Các dòng “Nội dung chiếu” là nội dung chính trên slide.
- Xuất PPTX chỉnh sửa được và PDF 6 trang nếu công cụ hỗ trợ.

## Quy tắc giữ đúng sự thật

1. 1.092 là số tin nhắn, gồm 779 tin người gửi và 313 tin bot. Không viết thành 779 học viên.
2. Thống kê chủ đề là số tin có từ khóa, có thể chồng lắp. Không cộng thành số người hoặc số câu hỏi lặp đã gán nhãn.
3. 20/20 là đúng nhánh xử lý và ID nguồn kỳ vọng trên bộ tự xây. Không viết “AI chính xác 100%” hoặc “không bao giờ bịa”.
4. Có 8 phản hồi AI thật trong 20 câu. Các câu còn lại xử lý bằng rule. 8/8 chỉ là số ca AI thành công trên các ca cần gọi AI.
5. Kho trả lời hiện có 4 trích đoạn đối chiếu CSV, chưa xác minh vai trò TA. Không mô tả là toàn bộ tri thức khóa học hoặc tài liệu chính thức được TA duyệt.
6. Web simulator và backend có AI thật, lưu SQLite. Tích hợp Discord có mã nguồn nhưng chưa có bằng chứng kiểm chứng trên guild thật. Ticket local chưa đồng nghĩa TA đã nhận.
7. Không thêm số tiết kiệm 15–45 phút, giảm 60% tải TA, số người hài lòng hoặc hiệu quả triển khai vì chưa có phép đo.
8. Không nêu model cụ thể: spec và giá trị mặc định trong code chưa thống nhất, model có thể cấu hình. Chỉ ghi OpenAI Responses API nếu cần.
9. Không dùng 19/20 làm kết quả nội dung đã xác minh của log hiện tại. Báo cáo cũ ghi nhận con số này từ trợ lý xây dựng, nhưng output lưu hiện tại đã khác ví dụ lỗi cũ và chưa có phiếu chấm tương ứng.
10. Không sửa hoặc tự kết luận hoàn thành quality bar CP4. Trình bày đúng tiêu chí và giới hạn bên dưới.

---

## Slide 1 — Kute: hỗ trợ học viên đang mắc lỗi cài đặt

Nội dung chiếu:
- Người dùng: học viên gặp lỗi CVAT, Docker hoặc truy cập Phoenix trong lúc chuẩn bị thực hành.
- Việc cần hoàn thành: xử lý sự cố để tiếp tục bài lab.
- Quote nguyên văn: “Hi, mình vẫn chưa cài được CVAT. Có bạn nào hỗ trợ được mình không?” — M07901.
- Bằng chứng: 1.092 tin nhắn onboarding, gồm 779 tin người gửi và 313 tin bot.
- Nhóm Không Biết Tên, K4-3A-E402.

Gợi ý bố cục: quote làm trọng tâm, số 1.092 lớn ở bên cạnh; tên dự án và nhóm tích hợp ngay trang này.

Nguồn chân slide: data/k4_messages.csv, M07901; eval/evidence.json. Dữ liệu 12–14/09/2026.

Speaker notes — Trí, 0:00–0:45: Mở bằng câu hỏi thật. Đây là bằng chứng tình huống tồn tại; chưa phải bằng chứng lượng hóa thời gian chờ hoặc số học viên gặp lỗi. Nhu cầu nhóm muốn kiểm chứng là hướng dẫn có căn cứ, có đường chuyển TA khi cần.

## Slide 2 — Vì sao chọn hỗ trợ kỹ thuật?

Nội dung chiếu: bảng so sánh ba hướng.

| Hướng | Bằng chứng từ tin người gửi | Quyết định |
|---|---|---|
| Hỗ trợ kỹ thuật | 21 tin CVAT/OPA/Docker, 28 tin Phoenix | Chọn: có tình huống và hướng dẫn cụ thể để đối chiếu |
| Điểm danh | 49 tin điểm danh/Zoom | Chưa chọn: thiếu dữ liệu điểm danh cá nhân |
| Standup và lập nhóm | 58 tin Standup, 65 tin team | Chưa chọn: cần xác minh chính sách và quyền thao tác |

Câu kết trên slide: Chọn theo khả năng kiểm chứng và triển khai trong thời gian hackathon.

Nguồn chân slide: eval/evidence.json; scripts/evidence.js. Đếm từ khóa, nhóm có thể chồng lắp.

Speaker notes — Trí, 0:45–1:30: Không khẳng định hỗ trợ kỹ thuật có số lượng lớn nhất vì bảng không chứng minh điều đó. Điểm chọn là phạm vi nhỏ, có dữ liệu kiểm tra và không cần quyền quyết định điểm danh hay ghép nhóm. Chưa đo mức giảm tải TA.

## Slide 3 — Luồng hỗ trợ và demo hai tình huống

Nội dung chiếu:
- FOUND: trả lời có trích đoạn để người học đối chiếu.
- CLARIFY: hỏi lại khi thiếu thông tin.
- NOT_FOUND: chưa đủ căn cứ hoặc vượt thẩm quyền, cho chuyển TA.
- Kho trả lời: 4 trích đoạn đối chiếu CSV, lấy tối đa 3 đoạn cho một câu hỏi.
- Ca chuẩn: “CVAT OPA báo 500 health bundles ngay sau docker compose up -d.” Nguồn kỳ vọng M12802.
- Ca khó: “Xin gia hạn bài CVAT health check cho em.” Kỳ vọng từ chối tự gia hạn và cho chuyển TA.
- Trạng thái: Web và AI thật; chưa kiểm chứng Discord guild.

Gợi ý bố cục: sơ đồ ba nhánh đơn giản, hai câu demo ngắn ở dưới. Không dựng màn hình giả như kết quả đã chạy.

Nguồn chân slide: src/knowledge.js; src/assistant.js; src/discord.js; app.js.

Speaker notes — Long, 1:30–3:45: Chọn tự động hóa có điều kiện vì hướng dẫn sai có thể làm hỏng môi trường. Chuyển sang web, gửi ca chuẩn, mở nguồn và kiểm tra nội dung thực tế. Đặt lại trước ca gia hạn. Bấm Chuyển TA và đọc đúng trạng thái. Nếu chỉ lưu local thì nói chưa gửi Discord. Có rule trước bước gọi model, không phải mọi ca đều cần AI. Nếu live lỗi, chuyển video đã kiểm tra và nói rõ đó là bản ghi.

## Slide 4 — Kết quả đo trên 20 câu tự xây

Nội dung chiếu:
- 20 câu: 8 FOUND, 4 CLARIFY, 8 NOT_FOUND.
- 20/20 đúng nhánh và mã nguồn kỳ vọng.
- 8/8 ca cần gọi AI có phản hồi thật, tương ứng 8/20 câu toàn bộ.
- Quality bar ghi trong spec: ≥85% đúng nhánh và nguồn, 100% không bịa khẳng định khi thiếu nguồn.
- Kết luận: vượt ngưỡng nhánh và nguồn; chưa đủ bằng chứng nghiệm thu điều kiện nội dung.

Gợi ý bố cục: nhấn 20/20 cùng nhãn đầy đủ; đặt tiêu chí bên cạnh. Không dùng biểu đồ “độ chính xác AI 100%”.

Nguồn chân slide: eval/results-live.json, ngày 17/09/2026; scripts/evaluate.js; spec.md §7.

Speaker notes — Trường, 3:45–4:35: Script chỉ kiểm tra nhánh và sự hiện diện của ID kỳ vọng. Bộ tự xây chưa phải đánh giá độc lập. Spec còn ghi routing 100% ở phần chiều chất lượng; kết quả hiện đạt cả hai ngưỡng routing nhưng chưa giải quyết sự không thống nhất trong cách diễn đạt. Không thay chuẩn sau CP4. Không trình bày 19/20 như nghiệm thu chuyên môn của log hiện tại.

## Slide 5 — Case 6: đúng nguồn nhưng diễn đạt còn mơ hồ

Nội dung chiếu:
- Câu hỏi: “CVAT tag image cũ cần đối chiếu phiên bản nào?”
- Output đang lưu: “Hình bản CVAT cũ tag chuẩn phiên bản v2.74.1, sử dụng kết hợp với openpolicyagent/opa:1.12.2 để đối chiếu.”
- ID nguồn: M17439. Script chấm đạt về nhánh và nguồn.
- Điểm cần kiểm tra: cách diễn đạt “Hình bản CVAT cũ” chưa rõ nghĩa kỹ thuật.
- Bài học: mã nguồn hợp lệ chưa chứng minh câu trả lời rõ và đúng toàn bộ nội dung.
- Chưa có log validation với người ngoài nhóm.

Gợi ý bố cục: đối chiếu câu hỏi và output, đánh dấu đúng cụm “Hình bản CVAT cũ”. Không thay nó bằng quote cũ “tag hình ảnh” vì log hiện tại không ghi nguyên văn như vậy.

Nguồn chân slide: eval/results-live.json, case 6; src/assistant.js, kiểm tra sourceIds.

Speaker notes — Trường, 4:35–5:25: Đây là ví dụ cần rà nội dung, không tự gán một tỷ lệ sai mới. Báo cáo trước từng ghi lỗi thuật ngữ ở lượt trước; kết quả hiện tại đã khác nên cần phiếu chấm gắn đúng output. Hai người nên chấm độc lập ca khó. Do chưa có validation, trang này dùng phân tích golden set theo phương án thay thế được guide §5.1 cho phép.

## Slide 6 — Nếu có thêm một tuần

Nội dung chiếu:
1. Từ case 6: kiểm tra nội dung và thuật ngữ, sửa rồi chạy lại đủ 20 câu; lưu riêng từng lượt.
2. Từ giới hạn 4 nguồn: nhờ TA duyệt và bổ sung hướng dẫn kỹ thuật, kiểm tra cả cách hỏi biến thể.
3. Từ thiếu validation: cho 5 người ngoài nhóm dùng thử, ghi quan sát và kiểm chứng luồng Discord đến TA.

Câu kết: Mỗi hướng dẫn cần có nguồn thực sự chứng minh.

Nguồn chân slide: eval/results-live.json; src/knowledge.js; docs/SPEC-REVIEW.md. Đây là kế hoạch, chưa phải kết quả.

Speaker notes — Dương, 5:25–6:00: Ưu tiên kiểm chứng trước khi mở rộng. Prototype đã chứng minh luồng nhỏ có AI thật, khả năng hiển thị nguồn và lưu ticket. Chưa kết luận hiệu quả thực tế với học viên. Cảm ơn và chuyển Q&A, không thêm slide thứ bảy.

## Thông tin nhóm để đặt trong ghi chú hoặc footer khi cần

- Trần Quốc Bảo Long: đội trưởng, AI call và Discord endpoint.
- Ngô Minh Trí: khai phá dữ liệu và bằng chứng.
- Nguyễn Thanh Dương: đặc tả, kiến trúc và backend.
- Đào Thanh Trường: kiểm thử, demo và pitching.

Tổng thời lượng 6 phút, đã tính chuyển người và demo. Không đưa toàn bộ speaker notes lên slide. Không tự bổ sung thành tích, người dùng, tỷ lệ hài lòng hoặc hình ảnh như bằng chứng nếu không được cung cấp.

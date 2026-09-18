# Rà soát spec.md — 17/09/2026

Phạm vi: đọc spec mới, mã nguồn, golden set và báo cáo; chạy lại 8 unit test, thêm các probe local không gọi OpenAI/Discord. Không sửa logic hoặc spec trong lần rà soát. Kết quả: có lõi working prototype, chưa đủ bằng chứng để xác nhận đáp ứng toàn bộ chuẩn chất lượng của spec.

## Những thiếu sót cần xử lý

| Ưu tiên | Yêu cầu spec | Hiện trạng / bằng chứng | Việc cần làm |
|---|---|---|---|
| P1 | §4, §7: chỉ trả lời có căn cứ; không bịa khẳng định | src/assistant.js:19 chỉ kiểm tra ID thuộc tập truy xuất và FOUND có ID. Probe provider giả trả lời “Hãy xóa toàn bộ dữ liệu Docker để sửa lỗi” kèm M12802 vẫn được chấp nhận FOUND. Đây là phép thử validator, không phải phản hồi AI thật. | Kiểm tra hướng dẫn/lệnh có được nguồn hỗ trợ; với lát cắt nhỏ có thể giới hạn phần hướng dẫn vào nội dung đã duyệt. Thêm test đúng ID nhưng sai nội dung; không tuyên bố bảo đảm 100% từ kiểm tra ID. |
| P1 | §7: acceptance do người đánh giá chuyên môn ≥85% | scripts/evaluate.js:3 chỉ chấm nhánh và có ID kỳ vọng. Kết quả 19/20 là rà bởi trợ lý xây dựng, không phải người đánh giá chuyên môn; chưa có phiếu chấm từng câu. | Chấm nội dung theo rubric, người chấm và lý do từng case; tách routing, citation, semantic acceptance, safety. |
| P1 | §7: chất lượng routing 100%, citation 100%, acceptance ≥85% | Quality bar cùng mục lại nói ≥85% đúng nhánh và nguồn. Script chỉ yêu cầu tổng ≥85% và có ít nhất 1 AI thật. Có thể qua dù vi phạm yêu cầu thành phần. | Chốt tiêu chí nào bắt buộc và mẫu số từng chỉ số; đồng bộ script, spec, report. Bộ mới 8/6/6 chưa phải golden set được spec chọn; không tự thay bộ cũ 8/4/8. |
| P2 | §4b, §6: feedback hài lòng/chưa đúng | src/discord.js:6 chỉ có solved/ticket; server.js:15 không nhận incorrect. Web có nút chưa đúng. | Bổ sung nút Discord và xử lý lưu feedback incorrect, test đúng/sai owner. |
| P2 | §6: không có căn cứ → NOT_FOUND | src/assistant.js:6 đưa câu ngắn hoặc có tên công cụ nhưng không retrieve được sang CLARIFY. Probe “Thời tiết?” nhận câu hỏi về hệ điều hành; “CVAT báo lỗi chứng chỉ TLS x509 unknown authority” vẫn bị hỏi lại mã lỗi đã có. | Phân biệt thiếu ngữ cảnh, ngoài phạm vi và đủ ngữ cảnh nhưng không có nguồn; kiểm tra các biến thể thay vì chỉ golden set hẹp. |
| P2 | §5: ticket lỗi gửi có thể retry | Có trạng thái delivery-failed, nhưng chưa test handoff lỗi→retry→sent. Hai request đồng thời có thể cùng gửi khi state chưa sent; unique SQLite chỉ chống trùng hàng ticket. Payload bị cắt 1950 ký tự có thể mất câu trả lời và nguồn với câu hỏi dài. | Test lỗi/đồng thời, khóa gửi theo ticket; chia payload để không mất ngữ cảnh. Trường hợp request timeout sau khi Discord đã nhận vẫn cần đối soát để tránh gửi trùng. |
| P2 | §4b: nói rõ phạm vi tại /hoi | Web có mô tả phạm vi; đăng ký slash chỉ nói trợ lý kỹ thuật chung, câu trả lời Discord không có phần hướng dẫn phạm vi rõ ràng. | Bổ sung mô tả ngắn hoặc /help nói rõ 4 nguồn, giới hạn và chuyển TA. |
| P2 | §5 và §7: kiểm chứng failure modes | 8 unit test đạt nhưng chưa có test endpoint signed POST→ACK→PATCH, guild filter, timeout, handoff failure/retry, hoặc owner qua HTTP thực tế. Test tên “replay” chỉ thử timestamp cũ, chưa thử replay cùng ID trong cửa sổ hợp lệ. | Bổ sung integration test bằng adapter/mock HTTP; giữ test thật với guild là bước riêng. |
| P2 | Demo chạy ổn định | server.js:40 chưa xử lý listen error; EADDRINUSE đã xảy ra trong phiên làm việc. | Thông báo cổng đang bận, hướng dẫn đổi PORT; không kill tiến trình không rõ chủ. |

## Những chỗ cần chỉnh trong đặc tả/bằng chứng

- §1: đường dẫn thực tế là data/k4_messages.csv, không phải data/discord-pack/.
- §2: 779 là số tin người gửi, không phải 779 học viên. 65 là số tin chứa từ khóa team, không phải 65 học viên. Nhóm CVAT 21 của script gồm CVAT/OPA/Docker; nhóm điểm danh gồm cả Zoom. Các nhóm có thể chồng lắp.
- §2: 15–45 phút chờ, 2–3 giờ TA/ngày, giảm 60% câu hỏi chưa có log/khảo sát chứng minh trong artifacts đã đọc. Ghi là giả thuyết/mục tiêu hoặc bổ sung phép đo. Không thể dùng các con số đó làm hiệu quả đã đạt.
- §3–4: “verified” mới có nghĩa đối chiếu với CSV, không phải đã được TA xác nhận đúng/chính thức. knowledge.js tự ghi chưa xác minh vai trò TA. Cần định nghĩa mức kiểm duyệt hoặc bổ sung người duyệt/ngày duyệt.
- §3: “Discord FAQ Bot chuẩn” chưa chỉ rõ sản phẩm, nguồn nghiên cứu hoặc thử nghiệm so sánh. §8 có nêu so sánh hai prototype nhưng chưa có artifact/kết quả chứng minh đã thực hiện.
- §7: lượt 1 là chạy live bị chặn mạng, không phải chế độ --offline (offline-extractive). Log lượt 1 đã bị ghi đè; chỉ còn mô tả trong report, chưa tái kiểm tra được từ file riêng.
- §7: 8/8 = tỷ lệ thành công trong các câu cần AI; trên toàn bộ 20 câu là 8/20 có AI thật. Ghi rõ mẫu số để không nhầm 100% mọi câu do AI xử lý.
- §7: 19/20 nội dung chưa là nghiệm thu chuyên môn. Lỗi image tag case 6 vẫn được ghi trong report; chưa có kết quả sửa và đánh giá lại.

## Đã có và phù hợp

- Ba nhánh, API thật với structured output, khóa ở server, store:false; nhánh guardrail chạy bằng rule nên không phải mọi quyết định đều do AI.
- Chỉ 4 trích đoạn cộng đồng đã đối chiếu, không dùng câu trả lời bot cũ làm nguồn chuẩn; đúng phạm vi 4 trích đoạn đã chốt trong spec.
- SQLite lưu câu hỏi, kết quả, feedback và ticket; bảo vệ owner trong đường xử lý và không báo gửi TA thành công khi thiếu cấu hình.
- Xác thực chữ ký Discord, kiểm tra timestamp, xử lý ACK trước gọi model; có mã đăng ký /hoi.
- Web có nguồn, nút đã giải quyết/chưa đúng/chuyển TA, trạng thái lỗi provider và hỗ trợ bổ sung CLARIFY.
- 8/8 unit test chạy lại thành công trong lần rà soát này. Không chạy lại live eval, không ghi đè kết quả cũ.

## Giới hạn đã được spec chấp nhận — không coi là thiếu tính năng bắt buộc

Guild Discord thật và dashboard TA chưa có, đã được §4 công khai. Không phải lỗi tuân thủ prototype, nhưng chưa thể tuyên bố đã vận hành trên Discord thật. Mở rộng sang toàn CSV không bắt buộc khi spec chốt 4 trích đoạn. Willing-user validation là bonus; chưa có phản hồi của hai người dùng. Video 30 giây là yêu cầu CP trong ảnh trước đó, hiện chỉ có kịch bản chứ chưa có video.

## Thứ tự xử lý đề xuất

1. Đồng bộ quality bar và sửa cách diễn giải evidence; lập phiếu chấm chuyên môn.
2. Bổ sung kiểm tra nội dung có căn cứ và regression case đúng ID/sai hướng dẫn; sửa lỗi thuật ngữ đã ghi nhận.
3. Hoàn thiện feedback Discord, routing biến thể và handoff/retry.
4. Test integration, xử lý lỗi cổng; kết nối guild thử và quay demo khi có cấu hình.

# Đối chiếu sổ tay BTC — 17/09/2026

Nguồn: “Số tay Hackathon K4 - Dành cho học viên.pdf”, 12 trang. Đã đọc trực quan toàn bộ. Phạm vi kiểm tra là repo local, lịch sử Git local và bằng chứng có trong phiên làm việc; không suy đoán việc nhóm đã nộp form, VLearn hay làm thử nghiệm ở ngoài repo. Không sửa spec, chuẩn đạt, mã nguồn hoặc thực hiện nộp bài.

## Kết luận

Nhóm đã có canvas, spec, prototype gọi AI thật, golden set 20 câu và log kết quả. Những phần hồ sơ chưa thấy hoàn thành gồm video CP3, slide PDF 6 trang và video dự phòng CP5, README theo mẫu/bảng thành viên, reflection từng người. Chưa có bằng chứng R6 dùng thử 5 người. Trạng thái nộp form, repo public và từng thành viên nộp VLearn chưa xác minh.

## Đối chiếu các mốc

| Mốc / trang sổ tay | Yêu cầu | Hiện trạng | Còn phải làm / xác minh |
|---|---|---|---|
| CP1, tr.4 | Canvas đủ 4 ô theo mẫu; đội trưởng và mã học viên; repo public; ít nhất 2 willing users | canvas.md có nội dung, 4 thành viên, đội trưởng và 2 tên dự kiến. Không có 01-challenge-brief.md để đối chiếu đúng 4 ô mẫu. | Xác nhận hai người đã đồng ý dùng thử và được khai ở CP1; kiểm tra repo public và phiếu nộp. “Dự kiến” chưa là bằng chứng đã đồng ý. |
| CP2, tr.4 | Một trong ba: mock bấm được / sơ đồ luồng / video luồng | Có giao diện web tương tác, nguồn, ba nhánh và ticket; đã kiểm tra ở phiên trước. | Có artifact đáp ứng dạng mock; chưa biết nhóm đã nộp đúng mốc hay chưa. Không cần làm đủ cả ba loại. |
| CP3, tr.5 | Video thao tác 30 giây thấy ≥1 lời gọi AI thật | Có AI thật và eval/results-live.json; docs/DEMO.md mới là kịch bản. Không thấy file hoặc link video. | Quay và nộp video. Log API không thay thế video bắt buộc. |
| CP3, tr.5 | Số đo thử X, đạt Y theo chuẩn nhóm | Có 20 câu, 20/20 nhánh+ID; nội dung 19/20 là rà bởi trợ lý xây dựng. | Làm bảng chấm từng câu và lý do sai, nêu rõ ai chấm. Không gọi kiểm tra ID nguồn là kiểm tra nội dung đúng. 20 câu là ví dụ của sổ tay, không phải mức tối thiểu được trang này quy định. |
| CP4, tr.6 và 11 | Chốt spec.md, chuẩn đạt và khai phần chưa xong; không đổi chuẩn sau mốc | spec có chất lượng và phần mock, nhưng routing 100% và quality bar ≥85% chưa thống nhất. Có review riêng ghi các thiếu sót. | Nếu chưa nộp CP4: thống nhất trước khi chốt. Nếu đã nộp: giữ snapshot/chuẩn đã nộp, ghi sự không nhất quán và xác nhận với coach nếu cần; không đổi ngưỡng sau khi thấy điểm. |
| CP5, tr.6 | Slide 6 trang, xuất PDF theo 02-guide.md §5.1 | Chưa có demo-slides.pdf hoặc deck trong repo. Không có guide để đối chiếu nội dung 6 trang. | Làm PDF 6 trang, bổ sung guide để kiểm tra cấu trúc chính xác; không chỉ nộp link slide. |
| CP5, tr.6 | Video dự phòng của demo trên sân khấu | Chưa có file/link video; kịch bản hiện chỉ là CP3 30 giây. | Quay đúng demo sẽ trình bày, lưu bản chạy được khi mất mạng. Không tự xem video ngắn CP3 là đã đủ CP5. |
| CP6, tr.6,10,12 | Trình bày; mọi người hiểu phần mình | Có phân công; không thấy kịch bản pitch hoặc bằng chứng tập dượt. | Chuẩn bị pitch và Q&A, mỗi thành viên giải thích được phần được giao. Không có bài nộp riêng CP6. E402 có pitch vòng cụm 7 phút; chung kết phòng 10 phút = 7 trình bày + 3 hỏi đáp. |

## Hồ sơ repo và thủ tục nộp

| Mục / trang | Đã thấy | Còn thiếu / giới hạn |
|---|---|---|
| README theo BTC và bảng thành viên, tr.8 | README hiện là hướng dẫn chạy; thành viên đang nằm trong canvas.md. | Chưa có bảng thành viên trong README, chưa có README mẫu BTC để đối chiếu. |
| spec.md, tr.8 | Có, commit local 59b5aa7. | Cần sửa cách diễn giải evidence, khai giới hạn đúng; xử lý quality bar theo trạng thái chốt CP4. |
| demo-slides.pdf, tr.8 | Không thấy. | Thiếu. |
| codebase/ và mô tả phần mock, tr.8 | Code nằm root + src/, phần mock đã ghi trong spec/README. | Nội dung code có; layout không theo cây mẫu codebase/. Tối thiểu cần README chỉ rõ vị trí tương đương; muốn theo đúng cấu trúc mẫu thì tổ chức lại và kiểm tra lệnh chạy. |
| eval/ với golden set + bảng kết quả các lượt, tr.8 | Có cases.json, results-live.json, REPORT.md. | Lượt đầu chỉ còn số tổng hợp, log chi tiết bị ghi đè; chưa có bảng chấm nội dung từng câu. |
| validation/, tr.8–9 | Không thấy. | Thiếu hồ sơ để nhận R6 (8 điểm). |
| reflection/ mỗi người 1 file, tr.8,12 | Không thấy. | Thiếu 4 bản reflection thật của Long, Trí, Dương, Trường; không viết giả trải nghiệm thay các bạn. |
| Repo mới, không fork, đúng tên và public, tr.7 | Tên K4-3A-E402-khongbietten đúng mẫu; remote GitHub có. | Không xác minh được public/fork bằng truy cập web trong lần này. Remote tồn tại không chứng minh repo public hoặc đã push bản mới. |
| Đội trưởng nộp CP1–CP5 cùng mã học viên, tr.7 | Canvas ghi Long, mã 2A202602696. | Chưa có receipt/ảnh xác nhận 5 form. Không suy ra đã nộp từ commit. |
| Từng người nộp cùng link repo trên VLearn, tr.7 | Không có bằng chứng. | Mỗi thành viên tự xác nhận; đội trưởng không nộp thay mục này. |

## R6: đủ bộ mới có bằng chứng cho 8 điểm (trang 9)

Sổ tay nói không làm R6 thì trần điểm 92; đây không phải điều kiện loại bài. Để lấy phần điểm này cần:

1. 5 người ngoài nhóm dùng thử, trong đó có 2 người đã khai từ CP1.
2. Nhật ký: ai thử, giao task gì, kẹt ở đâu, quote nguyên văn, quyết định của nhóm.
3. Quote lời nói lúc làm việc, không chỉ lời khen xã giao.
4. Ghi ít nhất một thay đổi trong spec §9; nếu giữ nguyên thì giải thích tại sao theo hướng dẫn trang 9.
5. Cuối bảng có 4 dòng: chủ đề lặp nhiều nhất; sẽ sửa gì trước demo; giữ nguyên gì và vì sao; ai đã đánh dấu.

Chưa có mục nào trong các bằng chứng này ở repo. Hai tên trong canvas chỉ là khai báo dự kiến, không thay thế nhật ký dùng thử.

## Điểm yếu có thể làm mất điểm nội dung

- R1 — Evidence & impact (15): 779 là tin nhắn người gửi, không phải học viên; 65 là lượt tin có từ khóa team. Các số thời gian chờ, giờ TA và giảm 60% chưa có bằng chứng. BTC nhấn mạnh số liệu bịa/không có chứng cứ không được tính (tr.8). Ghi là giả thuyết/mục tiêu nếu chưa đo.
- R2 — Lát cắt & thiết kế (15): đã có lát cắt; thuật ngữ “verified” cần nói rõ chỉ đối chiếu CSV, chưa được TA xác nhận chính thức.
- R3 — Khó/rủi ro (11): có 8 tình huống; Discord thiếu nút chưa đúng, routing và kiểm tra grounding còn lỗ hổng như SPEC-REVIEW.md đã ghi.
- R4 — Kiểm thử (15): có log chạy thật; cần tách đúng nhánh/ID khỏi đúng nội dung, chỉ rõ lỗi case 6. Số không đẹp vẫn được điểm nếu có phân tích trung thực (tr.5,8).
- R5 — Prototype chạy (8): có web và AI thật. Sổ tay cho phép cả sketch/mock/working, nên nối guild Discord thật không là yêu cầu chung bắt buộc ở đây. Bắt buộc chứng minh ≥1 AI call trong video CP3 và khai đúng phần mock.
- R7 — Quy trình/repo (3): thiếu reflection, README thành viên, slide và các artifact cần liên kết rõ.

## Dữ liệu và bảo mật (tr.7,11)

data/, .env, runtime/ được gitignore; git ls-files không có data pack hoặc .env. Kiểm tra lịch sử Git local với hai đường dẫn này chưa thấy file đã commit. Đây không phải chứng nhận mọi secret trong toàn lịch sử đều sạch. Không commit runtime SQLite hay ảnh/video lộ khóa. Sổ tay cho phép trích đoạn ngắn, không cho công khai toàn data pack; giữ mã nguồn và trích dẫn tối thiểu như hiện tại.

## Hạn lớp 3A trong sổ tay (trang 3)

CP1 19:30 16/9; CP2 21:00 16/9; CP3 16:00 17/9; CP4 21:00 17/9; CP5 **13:00 18/9, hạn nộp cuối**; CP6 17:30 18/9. CP1–CP5 mỗi mốc 5 điểm, trễ mất điểm mốc đó và không bù bằng mốc khác. Không dùng lịch trong sổ tay để khẳng định nhóm đã nộp/trễ khi chưa có xác nhận nộp.

## Thứ tự nên hoàn tất

1. Xác minh receipt CP1/CP2, video CP3 và số đo; giữ chuẩn CP4 đúng bản đã/chưa chốt.
2. Hoàn thiện slide PDF 6 trang và video dự phòng trước hạn CP5.
3. Bổ sung README thành viên, reflection và links tới artifacts; sửa số liệu không có căn cứ.
4. Nếu lấy R6: tổ chức 5 người dùng thử thật, ghi quote/nhật ký và quyết định thay đổi.
5. Kiểm tra repo public, bản đã push, form đội trưởng và VLearn từng thành viên; tập pitch 7 phút.

Tài liệu sổ tay còn tham chiếu 01-challenge-brief.md, tracks/README.md, 04-rubric.md, 02-guide.md, 03-ai-spec-template.md. Các file này chưa có trong repo đang kiểm tra nên chưa thể kết luận tuân thủ toàn bộ tiểu mục ngoài 12 trang sổ tay.

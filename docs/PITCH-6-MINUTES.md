# Kute — kịch bản pitching 6 phút

Soạn ngày 18/09/2026, theo `02-guide.md` §5.1–5.2 ở repo đề bài. Đây là lời thoại và nội dung để tập, chưa phải slide PDF. Số đo lấy từ `eval/results-live.json`, `eval/REPORT.md`, `eval/evidence.json`; không dùng số học viên/thời gian tiết kiệm chưa chứng minh trong spec.

Guide có lịch mẫu slide cộng thành 5 phút 30 giây, đồng thời ghi demo round 5 phút + 5 phút Q&A; sổ tay ghi E402 pitch vòng cụm 7 phút. Bản này theo yêu cầu đội: **6 phút trình bày, Q&A riêng**, cần xác nhận thời lượng tại sân khấu. Mỗi thành viên nói ít nhất một phần.

## 1. Đồng hồ và phân vai

| Mốc thời gian | Slide | Người nói | Điểm phải chốt |
|---|---|---|---|
| 0:00–0:45 | 1. User & Job | Trí | Học viên mắc lỗi cài đặt; câu hỏi thật và số tin, không nhầm số người. |
| 0:45–1:30 | 2. Vì sao chọn | Trí | So sánh 3 hướng, chọn vì khả năng kiểm chứng và triển khai. |
| 1:30–3:45 | 3. Giải pháp & demo | Long | Một FOUND thật + một NOT_FOUND; mở nguồn và lưu ticket. |
| 3:45–4:35 | 4. Kết quả đo | Trường | Chuẩn đã chốt; 20/20 nhánh+ID, 8 AI thật; giới hạn cách chấm. |
| 4:35–5:25 | 5. Một lỗi đáng học | Trường | Lỗi image tag; không bịa validation; chưa bảo đảm nội dung 100%. |
| 5:25–6:00 | 6. Thêm một tuần | Dương | 3 ưu tiên từ lỗi thật + bài học + kết. |

Long giữ chuột suốt bài để tránh chuyền máy. Dương giữ đồng hồ, ra hiệu ở 3:30 và 5:40; mỗi người tự chuyển lời đúng mốc. Bốn lần chuyển người đã nằm trong các khoảng trên. Thời lượng là ngân sách tập, chưa phải kết quả dry run đã đo.

## 2. Lời thoại và phần chiếu

### Slide 1 — Học viên cần tiếp tục bài lab, không phải tìm thêm một chatbot

**Chỉ chiếu:** quote M07901, “1.092 tin · 779 tin người gửi · 313 tin bot”, JTBD một dòng. Chân slide: `data/k4_messages.csv · M07901; eval/evidence.json`.

**Trí, 0:00–0:45:**

> “Hi, mình vẫn chưa cài được CVAT. Có bạn nào hỗ trợ được mình không?” Đây là câu hỏi thật, mã M07901, trong dữ liệu onboarding của khóa học.
>
> Nhóm Không Biết Tên chọn phục vụ học viên đang mắc lỗi cài đặt khi chuẩn bị làm lab. Việc họ cần hoàn thành là xử lý đúng sự cố để tiếp tục học, còn TA cần biết câu nào thực sự cần mình can thiệp.
>
> Nhóm khảo sát bằng dữ liệu 1.092 tin nhắn, gồm 779 tin của người và 313 tin của bot. Đây là số tin, không phải số học viên. Từ đó, nhóm chọn một lát cắt nhỏ để kiểm chứng: hỗ trợ lỗi kỹ thuật có nguồn.

### Slide 2 — Chọn hướng có thể kiểm chứng trong hackathon

**Chỉ chiếu bảng 3 dòng:**

| Hướng | Dữ liệu đếm được | Quyết định |
|---|---|---|
| Hỗ trợ kỹ thuật | 21 tin CVAT/OPA/Docker; 28 tin Phoenix | Chọn: có lỗi và hướng dẫn cụ thể để đối chiếu |
| Điểm danh | 49 tin chứa điểm danh/Zoom | Loại: không có cơ sở dữ liệu điểm danh cá nhân |
| Standup/nhóm | 58 tin Standup; 65 tin team | Loại: cần xác minh quy định và quyền thao tác |

Chân slide: `eval/evidence.json; scripts/evidence.js — đếm từ khóa, nhóm có thể chồng lắp, không phải câu hỏi lặp đã gán nhãn`.

**Trí, 0:45–1:30:**

> Nhóm cân nhắc ba hướng: hỗ trợ kỹ thuật, điểm danh và hỗ trợ standup hoặc lập nhóm.
>
> Trong các tin người gửi, có 21 tin nhắc CVAT, OPA hoặc Docker; 28 tin nhắc Phoenix. Các hướng còn lại cũng có nhu cầu, nhưng để trả lời điểm danh cá nhân hay tự sửa nhóm, chúng em cần dữ liệu và quyền mà prototype chưa có.
>
> Vì vậy, nhóm chọn hỗ trợ kỹ thuật vì có hướng dẫn cụ thể để kiểm tra câu trả lời. Chúng em chưa đo mức tiết kiệm thời gian hay giảm tải TA, nên chưa tuyên bố hiệu quả bằng phần trăm. Sau đây Long sẽ cho thấy lát cắt đang chạy.

### Slide 3 — Có nguồn thì hướng dẫn; thiếu căn cứ thì có đường chuyển TA

**Chỉ chiếu:** `Hỏi → tìm nguồn → FOUND / CLARIFY / NOT_FOUND → kiểm tra / chuyển TA`; “4 trích đoạn đối chiếu CSV”; nhãn “Web chạy thật · Discord chưa kiểm chứng trên guild”. Chân slide: `src/knowledge.js; src/assistant.js; demo trực tiếp`.

**Long, mở đầu 1:30–1:55:**

> Kute hỗ trợ một học viên hỏi lỗi kỹ thuật, tìm hướng dẫn trong bốn trích đoạn đã đối chiếu với CSV, rồi trả lời, hỏi lại hoặc từ chối và cho chuyển TA.
>
> Nhóm chọn tự động hóa có điều kiện vì hướng dẫn sai có thể làm hỏng môi trường học viên. Đây là web simulator dùng backend và AI thật. Tích hợp Discord đã có mã nguồn nhưng chưa kiểm chứng trên server thật; các nguồn hiện vẫn là trao đổi cộng đồng.

**1:55–2:45 — ca chuẩn, thao tác thật:**

1. Bấm Đặt lại. Dán và gửi: **“CVAT OPA báo 500 health bundles ngay sau docker compose up -d.”**
2. Trong lúc chờ, nói: “Câu này mô tả rõ thời điểm và mã lỗi. Hệ thống lấy trích đoạn phù hợp rồi gọi AI để trả lời.”
3. Khi phản hồi hiện ra, kiểm tra nhãn `openai`, `FOUND`, nguồn `M12802`; mở trích đoạn.
4. Nói theo output thực tế: “Nguồn mô tả OPA chưa lấy được policy bundle khi CVAT chưa hoàn tất migration. Người học có thể mở nguồn để đối chiếu lời hướng dẫn.” Nếu output khác kỳ vọng, không đọc lời thoại như thể nó đã đúng; nêu khác biệt và dùng đường phản hồi.

**2:45–3:20 — ca khó ngoài thẩm quyền:**

1. Bấm Đặt lại, gửi: **“Xin gia hạn bài CVAT health check cho em.”**
2. Khi hiện NOT_FOUND, nói: “Câu này vẫn chứa từ khóa kỹ thuật, nhưng yêu cầu là quyết định gia hạn. Bot cần từ chối tự quyết định và cho người học chuyển TA.”
3. Bấm **Chuyển TA**. Đọc đúng trạng thái hiện trên màn hình. Nếu là local: “Ticket đã được lưu trên máy chủ; chưa gửi đến Discord vì chưa cấu hình kênh TA.” Không nói TA đã nhận.

**3:20–3:45 — chốt, chuyển người:**

> Hai ca cho thấy cả đường có thể hỗ trợ và đường cần dừng lại. Người học cũng có thể đánh dấu câu trả lời chưa đúng. Chuyển TA là quyền lựa chọn của người dùng, không phải bằng chứng rằng mọi câu trả lời AI đều đáng tin. Trường sẽ trình bày kết quả đo và lỗi nhóm đã tìm thấy.

**Khi live trục trặc:** chờ tối đa khoảng 10 giây trước khi quyết định chuyển video đã kiểm tra. Nói: “Kết nối đang chậm; nhóm xin dùng bản ghi chạy thật để giữ thời lượng.” Nếu không có video phù hợp, hiển thị log đã lưu và nói rõ đó là kết quả lần chạy trước; không coi log là video dự phòng đã đáp ứng yêu cầu BTC. Không dùng video thay live khi live hoạt động bình thường.

### Slide 4 — Đúng nhánh chưa có nghĩa là đúng toàn bộ nội dung

**Chỉ chiếu:**

- 20 câu = 8 FOUND + 4 CLARIFY + 8 NOT_FOUND.
- 20/20 đúng nhánh và ID nguồn kỳ vọng; 8 phản hồi AI thật trên 8 ca cần gọi AI.
- Bar trong spec §7: “≥85% đúng nhánh và nguồn; 100% không bịa khẳng định khi thiếu nguồn”.
- Nội dung: 19/20 theo rà soát của trợ lý xây dựng, **chưa nghiệm thu chuyên môn**.

Chân slide: `eval/results-live.json; eval/REPORT.md; spec.md §7`.

**Trường, 3:45–4:35:**

> Bộ test hiện có 20 câu: tám câu cần trả lời có nguồn, bốn câu cần hỏi lại và tám câu cần từ chối. Lượt live đạt 20 trên 20 về nhánh xử lý và mã nguồn kỳ vọng, với tám phản hồi AI thật.
>
> So với bar ghi trong spec là ít nhất 85% đúng nhánh và nguồn, chỉ số này vượt ngưỡng. Tuy nhiên, nó chưa chứng minh điều kiện không bịa nội dung. Con số 19 trên 20 về nội dung mới là rà soát của trợ lý xây dựng, chưa được người đánh giá chuyên môn xác nhận.
>
> Vì vậy nhóm chỉ kết luận prototype đã chạy và đo được, chưa tuyên bố đạt mọi điều kiện chất lượng hay sẵn sàng triển khai rộng.

**Ghi chú cho người trình bày:** spec đồng thời ghi routing 100%. Kết quả lưu hiện tại đạt cả 100% và ≥85% ở phần routing, nhưng sự không thống nhất vẫn phải khai nếu được hỏi. Không âm thầm sửa chuẩn CP4 hoặc gọi đây là bar đã chốt trước mọi thử nghiệm khi chưa có bằng chứng về trình tự.

### Slide 5 — Một lỗi chỉ ra giới hạn của cách kiểm tra

Guide cho phép thay validation bằng phân tích golden set khi chưa làm dùng thử. **Không tạo quote giả.**

**Chỉ chiếu:** “Case 6: Docker image tag → bị diễn đạt thành tag hình ảnh”; “Đúng ID nguồn ≠ nội dung được nguồn chứng minh”; “Chưa có log validation”. Chân slide: `eval/results-live.json, case 6; eval/REPORT.md; docs/SPEC-REVIEW.md`.

**Trường, 4:35–5:25:**

> Ở case sáu, câu hỏi nói về tag của Docker image, nhưng câu trả lời lại diễn đạt thành “tag hình ảnh”. Phiên bản đúng, mã nguồn đúng, nhưng nghĩa kỹ thuật đã lệch.
>
> Lỗi này cho thấy cách chấm nhánh và ID chưa đủ để đánh giá câu trả lời. Kiểm tra mã nguồn tồn tại cũng không bảo đảm mọi hướng dẫn được nguồn hỗ trợ.
>
> Nhóm chưa có log dùng thử với người ngoài nên không đưa lời khen hoặc tỷ lệ hài lòng vào bài. Việc tiếp theo là cho hai người chấm độc lập các output khó và kiểm tra nội dung hướng dẫn sát với nguồn. Chúng em chưa có kết quả chạy lại chứng minh lỗi này đã được sửa. Dương sẽ chốt ba ưu tiên tiếp theo.

### Slide 6 — Một tuần để kiểm chứng trước khi mở rộng

**Chỉ chiếu 3 việc:**

1. Từ case 6: kiểm tra nội dung và thuật ngữ, sửa rồi chạy lại đủ 20 câu.
2. Từ giới hạn 4 nguồn: TA duyệt nguồn và bổ sung những câu kỹ thuật chưa được hỗ trợ.
3. Từ thiếu validation: thử với 5 người ngoài nhóm và kiểm chứng luồng Discord → TA.

Chân slide: `eval/REPORT.md; src/knowledge.js; docs/SPEC-REVIEW.md`.

**Dương, 5:25–6:00:**

> Nếu có thêm một tuần, nhóm ưu tiên ba việc: sửa lỗi nội dung rồi chạy lại toàn bộ test; nhờ TA duyệt và mở rộng nguồn; cuối cùng là dùng thử với năm người ngoài nhóm và kiểm chứng đường chuyển TA trên Discord.
>
> Bài học lớn nhất của nhóm là một câu trả lời có dẫn nguồn vẫn cần được kiểm tra xem nguồn có thực sự chứng minh nó hay không. Kute hiện chứng minh được một lát cắt nhỏ có AI thật và có đường lui khi không đủ căn cứ. Nhóm mong nhận góp ý để kiểm chứng mức hữu ích đó với học viên. Xin cảm ơn.

## 3. Tám câu Q&A cần tập

| Câu hỏi | Người trả lời đầu | Ý trả lời ngắn, đúng bằng chứng |
|---|---|---|
| Sao không dùng ChatGPT luôn? | Dương | Nhóm thử một flow có nguồn khóa học, ba nhánh và ticket. Chưa có thử nghiệm đối chứng chứng minh tốt hơn ChatGPT. |
| Có 1.092 tin mà chỉ dùng 4 đoạn? | Trí | Toàn pack dùng mining; bốn đoạn dùng làm kho trả lời của lát cắt. Chưa duyệt toàn CSV thành kiến thức chuẩn. |
| 100% là không bịa nữa đúng không? | Trường | Không. 20/20 chỉ đúng nhánh+ID trên bộ tự xây. Case 6 đã cho thấy nội dung vẫn có lỗi. |
| Nguồn đã verified nghĩa là gì? | Trí | Đã đối chiếu trích đoạn với CSV; chưa chứng minh vai trò TA hoặc tính đúng hiện hành. |
| Có tiết kiệm 60% công sức TA không? | Trí | Chưa có đo lường đó. Không dùng giả thuyết tác động làm kết quả. |
| Có phải mọi câu đều gọi AI? | Long | Không. Ca có nguồn đi vào OpenAI; một số ca mơ hồ/ngoài phạm vi xử lý bằng rule. Log có tám phản hồi AI thật. |
| Ticket đã tới TA thật chưa? | Long | Chưa có kiểm chứng guild thật. Demo hiện lưu SQLite; chỉ báo sent khi API Discord thành công. |
| Chuẩn routing là 85% hay 100%? | Trường | Spec có chỗ diễn đạt chưa thống nhất. Công khai cả hai; kết quả hiện đạt cả hai ở routing, còn điều kiện nội dung chưa nghiệm thu. Không sửa ngưỡng sau CP4 để làm đẹp kết quả. |

**Khi giám khảo đưa câu lạ:** Long nhập nguyên câu, không sửa cho khớp từ khóa. Chờ kết quả; Trường đối chiếu nguồn và tiêu chí. Nếu sai, nói “ca này cho thấy giới hạn …”, chỉ rõ bước tiếp theo. Nếu bị hỏi phần cá nhân, người được hỏi tự giải thích trước, không để đội trưởng trả lời thay hết.

## 4. Dry run trước sân khấu

- Mở đúng server đã chạy, kiểm tra một câu AI thật; tránh bật thêm một server trùng cổng. Không đưa khóa API lên màn hình.
- Mở sẵn 6 slide, simulator, log kết quả và video local; không để thời gian tìm tệp chiếm phần demo.
- Đã thấy `D:/Documents/AI20k/Week_1/demo_30s.mp4`, nhưng chưa xem nội dung trong lần chuẩn bị này. Đội phải mở kiểm tra: hình rõ, có AI thật, không lộ khóa, khớp phiên bản sẽ demo. Chưa mặc định đây là video dự phòng đầy đủ hai ca.
- Tập lần 1 nguyên bài, ghi thời điểm hết từng slide. Nếu quá 6 phút, cắt giải thích slide 1–2 và Q&A khỏi lời thoại chính, giữ cả case chuẩn và case khó.
- Tập lần 2 giả lập mất mạng để chuyển video trong tối đa 10 giây. Không tạo kết quả giả khi live lỗi.
- Tập lần 3 giám khảo hỏi ngẫu nhiên một thành viên về phần đã phân công. Mỗi người cần giải thích được input, output, giới hạn và bằng chứng của phần mình.
- Mục tiêu lúc tập là kết ở 5:45–5:55 để có dư địa thao tác; phải bấm giờ thực tế, không mặc định đọc hết văn bản là đúng 6 phút.

## 5. Những câu không nên nói

| Không nói | Nói đúng |
|---|---|
| “779 học viên gặp vấn đề” | “779 tin nhắn người gửi trong pack” |
| “Độ chính xác 100%” | “20/20 đúng nhánh và mã nguồn trong bộ tự xây” |
| “TA xác nhận 95% đúng” | “19/20 do trợ lý xây dựng rà, chưa nghiệm thu chuyên môn” |
| “Bot đang chạy trên Discord” | “Demo web chạy thật; tích hợp guild chưa kiểm chứng” |
| “Đã giảm 60% tải TA” | “Chưa đo được tác động này” |
| “Người dùng rất thích” | “Chưa có log validation để kết luận” |
| “Đã sửa lỗi image tag” | “Đã xác định lỗi; chưa có kết quả đánh giá lại chứng minh đã sửa” |

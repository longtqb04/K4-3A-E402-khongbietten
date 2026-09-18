from pathlib import Path
from reportlab.pdfgen import canvas
from pypdf import PdfReader
import pypdfium2 as pdfium
build = Path(__file__).resolve().parent
root = build.parents[2]
out = root / 'output/pdf/kute-pitch-6-slides-v2.pdf'
out.parent.mkdir(parents=True, exist_ok=True)
doc = canvas.Canvas(str(out), pagesize=(960,540), pageCompression=1)
doc.setTitle('Kute - Pitch 6 slides - revision 2')
doc.setAuthor('Nhom Khong Biet Ten - K4-3A-E402')
for i in range(1,7):
    doc.drawImage(str(build / f'slide-{i}.png'),0,0,960,540)
    doc.showPage()
doc.save()
assert len(PdfReader(out).pages) == 6
pdf = pdfium.PdfDocument(out)
for i in range(6):
    pdf[i].render(scale=1).to_pil().save(build / f'pdf-{i+1}.png')
print(out)

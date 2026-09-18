from pathlib import Path
from reportlab.pdfgen import canvas
from pypdf import PdfReader
root = Path(__file__).resolve().parents[2]
out = root / 'demo-slides.pdf'
doc = canvas.Canvas(str(out), pagesize=(960,540), pageCompression=1)
doc.setTitle('Kute - Pitch 6 slides - Khong Biet Ten')
doc.setAuthor('Nhom Khong Biet Ten - K4-3A-E402')
for i in range(1,7):
    doc.drawImage(str(root / 'tmp/slides-build/final-renders' / f'slide-{i}.png'), 0,0,960,540)
    doc.showPage()
doc.save()
assert len(PdfReader(out).pages)==6
print(out)

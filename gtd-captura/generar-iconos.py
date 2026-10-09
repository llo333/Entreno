"""Genera los iconos de la app y los incrusta al final de worker.js.

Uso: python3 generar-iconos.py   (necesita Pillow)
"""
import base64
import io
import pathlib

from PIL import Image, ImageDraw

MARCA = "// Iconos PNG (base64), generados con generar-iconos.py"
AMARILLO = (250, 204, 21)
BLANCO = (245, 245, 245)


def icono(size):
    s = size * 4  # se dibuja a 4x y se reduce para suavizar bordes
    im = Image.new("RGB", (s, s), (15, 15, 15))
    d = ImageDraw.Draw(im)
    m, w = s * 0.22, int(s * 0.075)
    d.rounded_rectangle([m, s * 0.30, s - m, s * 0.74], radius=s * 0.07, outline=AMARILLO, width=w)
    y = s * 0.55
    d.line(
        [(m, y), (s * 0.40, y), (s * 0.44, s * 0.62), (s * 0.56, s * 0.62), (s * 0.60, y), (s - m, y)],
        fill=AMARILLO, width=w, joint="curve",
    )
    cx = s / 2
    d.line([(cx, s * 0.14), (cx, s * 0.44)], fill=BLANCO, width=w)
    d.polygon([(cx - s * 0.09, s * 0.36), (cx + s * 0.09, s * 0.36), (cx, s * 0.47)], fill=BLANCO)
    buf = io.BytesIO()
    im.resize((size, size), Image.LANCZOS).save(buf, "PNG", optimize=True)
    return base64.b64encode(buf.getvalue()).decode()


worker = pathlib.Path(__file__).with_name("worker.js")
codigo = worker.read_text().split(MARCA)[0].rstrip() + "\n\n" + MARCA + "\n"
for n in (180, 192, 512):
    codigo += f'const ICON_{n} = "{icono(n)}";\n'
worker.write_text(codigo)
print("Iconos incrustados en", worker)

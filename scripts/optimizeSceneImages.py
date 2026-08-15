from pathlib import Path
from PIL import Image, ImageOps

SOURCE = Path('/home/ubuntu/webdev-static-assets/shadows-scenes')
DESTINATION = Path('/home/ubuntu/webdev-static-assets/shadows-scenes-webp')
MAX_SIZE = (1920, 1080)
QUALITY = 84

DESTINATION.mkdir(parents=True, exist_ok=True)

for source in sorted(SOURCE.glob('*.png')):
    with Image.open(source) as image:
        prepared = ImageOps.exif_transpose(image).convert('RGB')
        prepared.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)
        target = DESTINATION / f'{source.stem}.webp'
        prepared.save(target, 'WEBP', quality=QUALITY, method=6)
        print(f'{source.name} -> {target.name}: {prepared.width}x{prepared.height}, {target.stat().st_size} bytes')

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const dir = path.join(__dirname, 'public', 'img');
  
  if (fs.existsSync(path.join(dir, 'analogo.png'))) {
    await sharp(path.join(dir, 'analogo.png'))
      .resize(400) // 400px width is enough for a logo
      .webp({ quality: 80 })
      .toFile(path.join(dir, 'analogo.webp'));
    console.log('Optimized analogo.png to analogo.webp');
  }

  if (fs.existsSync(path.join(dir, 'giris.png'))) {
    await sharp(path.join(dir, 'giris.png'))
      .resize(800) // 800px width
      .webp({ quality: 80 })
      .toFile(path.join(dir, 'giris.webp'));
    console.log('Optimized giris.png to giris.webp');
  }
}

optimizeImages().catch(console.error);

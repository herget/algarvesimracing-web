const fs = require('fs');
const path = require('path');

// Read the ICO file and extract the first icon (16x16) to verify
const icoPath = path.join(__dirname, '..', 'public', 'favicon.ico');
const icoBuffer = fs.readFileSync(icoPath);

// ICO header structure:
// Offset 0: Reserved (2 bytes) - should be 0
// Offset 2: Type (2 bytes) - should be 1 for icon
// Offset 4: Count (2 bytes) - number of images

const reserved = icoBuffer.readUInt16LE(0);
const type = icoBuffer.readUInt16LE(2);
const count = icoBuffer.readUInt16LE(4);

console.log('ICO Header:');
console.log('  Reserved:', reserved);
console.log('  Type:', type);
console.log('  Number of icons:', count);

// Icon directory entry (starts at offset 6)
// Each entry is 16 bytes:
// Offset 0: Width (1 byte)
// Offset 1: Height (1 byte)
// Offset 2: Colors (1 byte)
// Offset 3: Reserved (1 byte)
// Offset 4: Color planes (2 bytes)
// Offset 6: Bits per pixel (2 bytes)
// Offset 8: Size in bytes (4 bytes)
// Offset 12: Offset in file (4 bytes)

console.log('\nIcon entries:');
for (let i = 0; i < count; i++) {
  const offset = 6 + (i * 16);
  const width = icoBuffer.readUInt8(offset);
  const height = icoBuffer.readUInt8(offset + 1);
  const bpp = icoBuffer.readUInt16LE(offset + 6);
  const size = icoBuffer.readUInt32LE(offset + 8);
  const dataOffset = icoBuffer.readUInt32LE(offset + 12);
  
  console.log(`  Icon ${i + 1}: ${width}x${height}, ${bpp}bpp, ${size} bytes at offset ${dataOffset}`);
}

// Extract the first icon (16x16) as PNG for verification
const firstIconOffset = icoBuffer.readUInt32LE(6 + 12);
const firstIconSize = icoBuffer.readUInt32LE(6 + 8);
const firstIconData = icoBuffer.slice(firstIconOffset, firstIconOffset + firstIconSize);

// Save as PNG for verification
const outputPath = path.join(__dirname, '..', 'public', 'favicon-extracted-16x16.png');
fs.writeFileSync(outputPath, firstIconData);
console.log('\nExtracted 16x16 icon to:', outputPath);

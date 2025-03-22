// This script generates the Paisa Track logo and saves it to the images directory
const fs = require('fs');
const { createCanvas } = require('canvas');

console.log('Generating Paisa Track logo without outline...');

// Create canvas
const canvas = createCanvas(200, 200);
const ctx = canvas.getContext('2d');

// Clear canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Draw rounded rectangle background
const cornerRadius = 20;
const width = 160;
const height = 160;
const x = (canvas.width - width) / 2;
const y = (canvas.height - height) / 2;

ctx.beginPath();
ctx.moveTo(x + cornerRadius, y);
ctx.lineTo(x + width - cornerRadius, y);
ctx.quadraticCurveTo(x + width, y, x + width, y + cornerRadius);
ctx.lineTo(x + width, y + height - cornerRadius);
ctx.quadraticCurveTo(x + width, y + height, x + width - cornerRadius, y + height);
ctx.lineTo(x + cornerRadius, y + height);
ctx.quadraticCurveTo(x, y + height, x, y + height - cornerRadius);
ctx.lineTo(x, y + cornerRadius);
ctx.quadraticCurveTo(x, y, x + cornerRadius, y);
ctx.closePath();

// Create gradient
const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
gradient.addColorStop(0, '#6366f1');  // Primary color
gradient.addColorStop(1, '#0ea5e9');  // Secondary color

// Fill with gradient
ctx.fillStyle = gradient;
ctx.fill();

// Draw outer circle (coin)
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 55, 0, Math.PI * 2);
ctx.fillStyle = '#ffffff';
ctx.fill();

// Draw inner circle (coin)
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 48, 0, Math.PI * 2);
ctx.fillStyle = '#f8f9fa';
ctx.fill();

// Draw ₹ symbol
ctx.font = 'bold 65px Arial';
ctx.fillStyle = '#6366f1';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('₹', canvas.width / 2, canvas.height / 2);

// Save to file
try {
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(__dirname + '/images/paisa-track-logo.png', buffer);
  console.log('Logo saved successfully to images/paisa-track-logo.png');
} catch (err) {
  console.error('Error saving logo:', err);
}

console.log('Note: This script requires the "canvas" npm package.');
console.log('If you get an error, run: npm install canvas'); 
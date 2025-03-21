// This script updates all Instagram links across HTML files
const fs = require('fs');
const path = require('path');

// List of all HTML files
const htmlFiles = [
  'about.html',
  'blog.html',
  'contact.html', // Already updated manually
  'help.html',
  'index.html',   // Already updated manually
  'privacy.html',
  'terms.html',
  '404.html',
  'thank-you.html'
];

// Instagram profile URL
const instagramUrl = 'https://www.instagram.com/ozr_ic/';

// Process each file
htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  // Read file content
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${file}:`, err);
      return;
    }
    
    // Replace Instagram links
    const updatedContent = data.replace(
      /<a href="#"><i class="fab fa-instagram"><\/i><\/a>/g,
      `<a href="${instagramUrl}"><i class="fab fa-instagram"></i></a>`
    );
    
    // Write updated content back to file
    fs.writeFile(filePath, updatedContent, 'utf8', err => {
      if (err) {
        console.error(`Error writing file ${file}:`, err);
        return;
      }
      console.log(`Updated Instagram link in ${file}`);
    });
  });
});

console.log('Script started. Updating Instagram links in all HTML files...'); 
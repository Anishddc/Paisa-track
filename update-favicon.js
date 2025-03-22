// This script adds favicon links to all HTML files in the project
const fs = require('fs');
const path = require('path');

// List of all HTML files
const htmlFiles = [
  'index.html',
  'about.html',
  'blog.html',
  'contact.html',
  'help.html',
  'privacy.html',
  'terms.html',
  '404.html',
  'thank-you.html'
];

// The favicon link to add
const faviconLink = '<link rel="icon" href="favicon.ico" type="image/x-icon">';

// Process each file
htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  // Read file content
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${file}:`, err);
      return;
    }
    
    // Check if favicon link already exists
    if (data.includes('rel="icon"') || data.includes('rel="favicon"')) {
      console.log(`Favicon already exists in ${file}`);
      return;
    }
    
    // Find the position to insert the favicon (after the last link tag or before </head>)
    let insertPosition;
    const lastLinkIndex = data.lastIndexOf('</link>');
    const headCloseIndex = data.indexOf('</head>');
    
    if (lastLinkIndex !== -1 && lastLinkIndex < headCloseIndex) {
      insertPosition = data.indexOf('>', lastLinkIndex) + 1;
    } else {
      // Insert before </head>
      insertPosition = headCloseIndex;
    }
    
    // Insert the favicon link
    const updatedContent = data.slice(0, insertPosition) + 
                          '\n    ' + faviconLink + 
                          data.slice(insertPosition);
    
    // Write updated content back to file
    fs.writeFile(filePath, updatedContent, 'utf8', err => {
      if (err) {
        console.error(`Error writing file ${file}:`, err);
        return;
      }
      console.log(`Added favicon link to ${file}`);
    });
  });
});

console.log('Script started. Adding favicon links to all HTML files...'); 
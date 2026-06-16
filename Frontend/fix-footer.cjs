const fs = require('fs');
let content = fs.readFileSync('src/components/Customer/Footer.jsx', 'utf8');

// Update footer background and text
content = content.replace(
  /<footer className="bg-emerald-deep text-\\[#f7f5f0\\] border-t border-gold-champagne\\/20 font-outfit relative">/,
  '<footer className="bg-[#fffaf0] text-slate-900 border-t border-gold-champagne/20 font-outfit relative">'
);

// Remove the premium features section
content = content.replace(
  /\s*\{\/\* Premium Features Bar \*\/\}[\s\S]*?<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">/,
  '\n            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">'
);

// Update light gray text to darker gray
content = content.replace(/text-\[#a3b3ac\]/g, 'text-slate-600');

// Update emerald dark and black backgrounds to transparent
content = content.replace(/bg-emerald-dark/g, 'bg-transparent');
content = content.replace(/bg-\[#070b09\]/g, 'bg-transparent');

fs.writeFileSync('src/components/Customer/Footer.jsx', content);
console.log('Footer updated.');

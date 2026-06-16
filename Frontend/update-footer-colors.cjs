const fs = require('fs');
let content = fs.readFileSync('src/components/Customer/Footer.jsx', 'utf8');

// Update footer root class
content = content.replace(
  '<footer className="bg-emerald-deep text-[#f7f5f0] border-t border-gold-champagne/20 font-outfit relative">',
  '<footer className="bg-[#fffaf0] text-slate-900 border-t border-gold-champagne/20 font-outfit relative">'
);

// Update light gray text to slate-600
content = content.split('text-[#a3b3ac]').join('text-slate-600');

// Update bottom bar background
content = content.replace('bg-emerald-dark', 'bg-transparent');

// Update mobile spacer background
content = content.replace('bg-[#070b09]', 'bg-[#fffaf0]');

fs.writeFileSync('src/components/Customer/Footer.jsx', content);
console.log('Footer updated.');

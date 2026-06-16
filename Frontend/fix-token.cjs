const fs = require('fs');
const path = require('path');

function walk(dir, cb) {
  fs.readdirSync(dir).forEach(f => {
    let p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      walk(p, cb);
    } else {
      cb(p);
    }
  });
}

walk('d:/Zippy/Nexen_Demo_Ecom/Frontend/src', f => {
  if (f.endsWith('.js') || f.endsWith('.jsx')) {
    let content = fs.readFileSync(f, 'utf8');
    let newContent = content.replace(/localStorage\.getItem\(['"]token['"]\)(?!\s*\|\|\s*sessionStorage)/g, "(localStorage.getItem('token') || sessionStorage.getItem('token'))");
    if (content !== newContent) {
      fs.writeFileSync(f, newContent);
      console.log('Updated ' + f);
    }
  }
});

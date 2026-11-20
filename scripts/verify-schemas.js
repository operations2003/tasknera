const fs = require('fs');
const path = require('path');

function findHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findHtmlFiles(fullPath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const appServerDir = path.join(__dirname, '..', '.next', 'server', 'app');
const htmlFiles = findHtmlFiles(appServerDir);

console.log(`Found ${htmlFiles.length} HTML files in ${appServerDir}`);

let totalSchemas = 0;
let errors = 0;
const results = [];

for (const filePath of htmlFiles) {
  const relative = path.relative(appServerDir, filePath).replace(/\\/g, '/');
  // Ignore 404, 500, admin
  const content = fs.readFileSync(filePath, 'utf8');
  
  const regex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let match;
  const schemasForPage = [];

  while ((match = regex.exec(content)) !== null) {
    totalSchemas++;
    try {
      const parsed = JSON.parse(match[1]);
      if (Array.isArray(parsed)) {
        for (const item of parsed) {
          schemasForPage.push(item['@type'] || 'Unknown');
        }
      } else {
        schemasForPage.push(parsed['@type'] || 'Unknown');
      }
    } catch (err) {
      errors++;
      console.error(`JSON Parse Error in ${relative}:`, err.message);
    }
  }

  results.push({
    file: relative,
    schemas: schemasForPage,
  });
}

console.log('\n--- SCHEMA EXTRACTION RESULTS ---');
for (const r of results) {
  console.log(`${r.file.padEnd(45)} -> ${r.schemas.join(', ') || '(None)'}`);
}

console.log(`\nTotal JSON-LD scripts found: ${totalSchemas}`);
console.log(`Parse errors: ${errors}`);

if (errors > 0) {
  process.exit(1);
}

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the built index.html
const indexHtmlPath = path.join(__dirname, 'dist', 'public', 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// Curriculum pages to generate
const curriculumPages = [
  'united-states',
  'united-kingdom',
  'canada',
  'australia',
  'singapore',
  'uae-(dubai)'
];

// Create curriculum directory
const curriculumDir = path.join(__dirname, 'dist', 'public', 'curriculum');
if (!fs.existsSync(curriculumDir)) {
  fs.mkdirSync(curriculumDir, { recursive: true });
}

// Generate index.html for each curriculum page
curriculumPages.forEach(page => {
  const pageDir = path.join(curriculumDir, page);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  const pageHtmlPath = path.join(pageDir, 'index.html');
  fs.writeFileSync(pageHtmlPath, indexHtml, 'utf-8');
  console.log(`✓ Created ${page}/index.html`);
});

// Also copy to 404.html
const notFoundPath = path.join(__dirname, 'dist', 'public', '404.html');
fs.writeFileSync(notFoundPath, indexHtml, 'utf-8');
console.log(`✓ Created 404.html`);

console.log(`\n✅ Generated ${curriculumPages.length + 1} SPA pages successfully!`);

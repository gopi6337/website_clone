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

// Generate flat HTML files for each curriculum page (avoids 301 redirect from directory structure)
curriculumPages.forEach(page => {
  // Flat file: /curriculum/singapore.html → served at /curriculum/singapore (no redirect)
  const flatHtmlPath = path.join(curriculumDir, `${page}.html`);
  fs.writeFileSync(flatHtmlPath, indexHtml, 'utf-8');
  console.log(`✓ Created curriculum/${page}.html`);

  // Also keep directory structure for backward compatibility
  const pageDir = path.join(curriculumDir, page);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  const pageHtmlPath = path.join(pageDir, 'index.html');
  fs.writeFileSync(pageHtmlPath, indexHtml, 'utf-8');
  console.log(`✓ Created curriculum/${page}/index.html`);
});

// Science curriculum pages
const scienceCurriculumDir = path.join(__dirname, 'dist', 'public', 'science-curriculum');
if (!fs.existsSync(scienceCurriculumDir)) {
  fs.mkdirSync(scienceCurriculumDir, { recursive: true });
}

curriculumPages.forEach(page => {
  const flatHtmlPath = path.join(scienceCurriculumDir, `${page}.html`);
  fs.writeFileSync(flatHtmlPath, indexHtml, 'utf-8');
  console.log(`✓ Created science-curriculum/${page}.html`);

  const pageDir = path.join(scienceCurriculumDir, page);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  const pageHtmlPath = path.join(pageDir, 'index.html');
  fs.writeFileSync(pageHtmlPath, indexHtml, 'utf-8');
  console.log(`✓ Created science-curriculum/${page}/index.html`);
});

// Also copy to 404.html
const notFoundPath = path.join(__dirname, 'dist', 'public', '404.html');
fs.writeFileSync(notFoundPath, indexHtml, 'utf-8');
console.log(`✓ Created 404.html`);

console.log(`\n✅ Generated ${curriculumPages.length + 1} SPA pages successfully!`);

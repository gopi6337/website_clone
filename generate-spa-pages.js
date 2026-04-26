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
// NOTE: Only flat files — no directory/index.html. GitHub Pages redirects /page → /page/ when
// a directory exists, which causes "Page with redirect" in GSC. Flat files prevent this.
curriculumPages.forEach(page => {
  const flatHtmlPath = path.join(curriculumDir, `${page}.html`);
  fs.writeFileSync(flatHtmlPath, indexHtml, 'utf-8');
  console.log(`✓ Created curriculum/${page}.html`);
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
});

// Generate top-level SPA pages as flat static HTML for crawlers (GEO/SEO)
// NOTE: Flat files (page.html) instead of directories (page/index.html) to avoid
// Vercel's 301 redirect from /page → /page/ which causes "Redirect error" in GSC.
const topLevelPages = ['about', 'reva', 'courses', 'tutors'];
topLevelPages.forEach(page => {
  const flatHtmlPath = path.join(__dirname, 'dist', 'public', `${page}.html`);
  fs.writeFileSync(flatHtmlPath, indexHtml, 'utf-8');
  console.log(`✓ Created ${page}.html`);
});

// Also copy to 404.html
const notFoundPath = path.join(__dirname, 'dist', 'public', '404.html');
fs.writeFileSync(notFoundPath, indexHtml, 'utf-8');
console.log(`✓ Created 404.html`);

console.log(`\n✅ Generated ${curriculumPages.length + topLevelPages.length + 1} SPA pages successfully!`);

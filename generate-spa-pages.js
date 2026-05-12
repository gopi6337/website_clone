import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the built index.html
const indexHtmlPath = path.join(__dirname, 'dist', 'public', 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// Curriculum page metadata — unique title + description per country
const curriculumMeta = {
  'united-states': {
    title: 'US Math Curriculum Grades 5–10 | EduVerseJr Online Math Teacher',
    description: 'Explore EduVerseJr\'s US Math Curriculum guide for Grades 5–10. Covers Common Core Algebra, Geometry, Statistics and more. Expert 1-on-1 online Math teaching aligned with US standards.',
    ogTitle: 'US Math Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade US Common Core Math curriculum guide for parents. Algebra, Geometry, Statistics and more for Grades 5–10 by EduVerseJr.',
  },
  'united-kingdom': {
    title: 'UK Math Curriculum Grades 5–10 | EduVerseJr Online Maths Teacher',
    description: 'Explore EduVerseJr\'s UK Maths Curriculum guide for Grades 5–10. Covers GCSE-aligned Algebra, Geometry, Statistics and more. Expert 1-on-1 online Maths teaching for UK students.',
    ogTitle: 'UK Maths Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade UK Maths curriculum guide for parents. GCSE-aligned Algebra, Geometry, Statistics for Grades 5–10 by EduVerseJr.',
  },
  'canada': {
    title: 'Canadian Math Curriculum Grades 5–10 | EduVerseJr Online Math Teacher',
    description: 'Explore EduVerseJr\'s Canadian Math Curriculum guide for Grades 5–10. Covers provincial Algebra, Geometry, Data Management and more. Expert 1-on-1 online Math teaching for Canadian students.',
    ogTitle: 'Canadian Math Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Canadian Math curriculum guide for parents. Provincial Algebra, Geometry, Data Management for Grades 5–10 by EduVerseJr.',
  },
  'australia': {
    title: 'Australian Math Curriculum Grades 5–10 | EduVerseJr Online Maths Teacher',
    description: 'Explore EduVerseJr\'s Australian Maths Curriculum guide for Grades 5–10. Covers ACARA-aligned Algebra, Geometry, Statistics and more. Expert 1-on-1 online Maths teaching for Australian students.',
    ogTitle: 'Australian Maths Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Australian ACARA Maths curriculum guide for parents. Algebra, Geometry, Statistics for Grades 5–10 by EduVerseJr.',
  },
  'singapore': {
    title: 'Singapore Math Curriculum Grades 5–10 | EduVerseJr Online Maths Teacher',
    description: 'Explore EduVerseJr\'s Singapore Maths Curriculum guide for Grades 5–10. Covers MOE-aligned Algebra, Geometry, Statistics and more. Expert 1-on-1 online Maths teaching for Singapore students.',
    ogTitle: 'Singapore Maths Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Singapore MOE Maths curriculum guide for parents. Algebra, Geometry, Statistics for Grades 5–10 by EduVerseJr.',
  },
  'uae-(dubai)': {
    title: 'UAE Math Curriculum Grades 5–10 | EduVerseJr Online Maths Teacher',
    description: 'Explore EduVerseJr\'s UAE Math Curriculum guide for Grades 5–10. Covers MOE UAE-aligned Algebra, Geometry, Statistics and more. Expert 1-on-1 online Maths teaching for UAE and Dubai students.',
    ogTitle: 'UAE Math Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade UAE MOE Math curriculum guide for parents. Algebra, Geometry, Statistics for Grades 5–10 by EduVerseJr.',
  },
};

// Inject curriculum-specific meta tags into an HTML string
function injectCurriculumMeta(html, page) {
  const meta = curriculumMeta[page];
  if (!meta) return html;

  const canonicalUrl = `https://eduversejr.com/curriculum/${page}`;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${meta.description}" />`
  );

  // Replace og:title
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${meta.ogTitle}" />`
  );

  // Replace og:description
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${meta.ogDesc}" />`
  );

  // Replace og:url
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // Replace twitter:url
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:url" content="${canonicalUrl}" />`
  );

  // Replace twitter:title
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${meta.ogTitle}" />`
  );

  // Replace twitter:description
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${meta.ogDesc}" />`
  );

  // Add canonical link (insert after <title> tag)
  if (!html.includes(`rel="canonical"`)) {
    html = html.replace(
      '</title>',
      `</title>\n    <link rel="canonical" href="${canonicalUrl}" />`
    );
  } else {
    html = html.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );
  }

  return html;
}

// Create curriculum directory
const curriculumDir = path.join(__dirname, 'dist', 'public', 'curriculum');
if (!fs.existsSync(curriculumDir)) {
  fs.mkdirSync(curriculumDir, { recursive: true });
}

// Generate flat HTML files for each curriculum page with unique meta tags
// NOTE: Only flat files — no directory/index.html. Vercel redirects /page → /page/ when
// a directory exists, which causes "Page with redirect" in GSC. Flat files prevent this.
const curriculumPages = Object.keys(curriculumMeta);
curriculumPages.forEach(page => {
  const pageHtml = injectCurriculumMeta(indexHtml, page);
  const flatHtmlPath = path.join(curriculumDir, `${page}.html`);
  fs.writeFileSync(flatHtmlPath, pageHtml, 'utf-8');
  console.log(`✓ Created curriculum/${page}.html (unique meta tags)`);
});

// Science curriculum pages (same structure, reuse curriculum meta with science framing)
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

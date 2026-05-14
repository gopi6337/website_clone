import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the built index.html (shared template)
const indexHtmlPath = path.join(__dirname, 'dist', 'public', 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// ─────────────────────────────────────────────────────────────────────
// Top-level pages — one entry per app route (relative to site root)
// ─────────────────────────────────────────────────────────────────────
const topLevelMeta = {
  'reva': {
    title: 'Reva AI Teacher — 24/7 AI Maths Tutor for Grades 5–12 | EduVerseJr',
    description: 'Meet Reva, your child\'s 24/7 AI maths teacher. Chat, voice, whiteboard, smart practice and progress tracking for Grades 5–12 + PSAT/SAT. Currently in private beta — join the waitlist.',
    ogTitle: 'Reva AI Teacher — 24/7 AI Maths Tutor | EduVerseJr',
    ogDesc: 'AI maths teacher for Grades 5–12. Chat, voice, interactive whiteboard, smart practice, progress tracking. Private beta — join the waitlist.',
  },
  'about': {
    title: 'About EduVerseJr — Reva AI + Expert Human Teachers',
    description: 'EduVerseJr is a hybrid learning platform combining Reva AI Teacher (24/7) with expert human teachers for live 1-to-1 Maths, Science and Coding classes for Grades 5–12.',
    ogTitle: 'About EduVerseJr — Reva AI + Expert Human Teachers',
    ogDesc: 'Hybrid AI + human teaching for Grades 5–12 in Maths, Science and Coding. Aligned with US, UK, Canadian, Australian, Singapore and UAE curricula.',
  },
  'courses': {
    title: 'Courses — Maths, Science & Coding for Grades 5–12 | EduVerseJr',
    description: 'Live 1-to-1 online courses in Mathematics, Science and Coding for Grades 5–12. Curriculum aligned with US Common Core, UK National Curriculum, Canadian, Australian, Singapore MOE and UAE MOE standards.',
    ogTitle: 'Courses — Maths, Science & Coding | EduVerseJr',
    ogDesc: 'Live 1-to-1 online classes for Grades 5–12 in Maths, Science and Coding — aligned with six international curricula.',
  },
  'teachers': {
    title: 'Expert Human Teachers — Live 1-to-1 Classes | EduVerseJr',
    description: 'Book a free trial class with our expert human teachers. Live 1-to-1 online Maths, Science and Coding lessons for Grades 5–10 + PSAT/SAT preparation. Curriculum aligned with six countries.',
    ogTitle: 'Expert Human Teachers — Book a Free Trial Class | EduVerseJr',
    ogDesc: 'Live 1-to-1 online classes with certified human teachers for Maths, Science, Coding (Grades 5–10) + PSAT/SAT prep. Book a free trial.',
  },
  'tutors': {
    title: 'Expert Human Teachers — Live 1-to-1 Classes | EduVerseJr',
    description: 'Book a free trial class with our expert human teachers. Live 1-to-1 online Maths, Science and Coding lessons for Grades 5–10 + PSAT/SAT preparation.',
    ogTitle: 'Expert Human Teachers — Book a Free Trial Class | EduVerseJr',
    ogDesc: 'Live 1-to-1 online classes with certified human teachers for Maths, Science, Coding (Grades 5–10) + PSAT/SAT prep.',
  },
  'privacy-policy': {
    title: 'Privacy Policy | EduVerseJr',
    description: 'How EduVerseJr collects, uses and protects student and parent data. COPPA-compliant, GDPR-aware. Governed under Indian law.',
    ogTitle: 'Privacy Policy — EduVerseJr',
    ogDesc: 'Our privacy practices for students, parents and Reva AI users. COPPA + GDPR aligned.',
  },
  'terms-of-use': {
    title: 'Terms of Use | EduVerseJr',
    description: 'Terms governing the use of EduVerseJr services, Reva AI Teacher and live human teaching classes. India-governed jurisdiction.',
    ogTitle: 'Terms of Use — EduVerseJr',
    ogDesc: 'Terms governing use of EduVerseJr and Reva AI Teacher. India jurisdiction.',
  },
  'disclaimer': {
    title: 'Disclaimer | EduVerseJr',
    description: 'Important disclosures on AI-generated content, parent supervision, generic AI naming and platform limitations.',
    ogTitle: 'Disclaimer — EduVerseJr',
    ogDesc: 'Disclosures on AI-generated content and parent supervision for EduVerseJr and Reva AI Teacher.',
  },
};

// ─────────────────────────────────────────────────────────────────────
// Math curriculum pages — one entry per country slug
// ─────────────────────────────────────────────────────────────────────
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
  'uae': {
    title: 'UAE Math Curriculum Grades 5–10 | EduVerseJr Online Maths Teacher',
    description: 'Explore EduVerseJr\'s UAE Math Curriculum guide for Grades 5–10. Covers MOE UAE-aligned Algebra, Geometry, Statistics and more. Expert 1-on-1 online Maths teaching for UAE and Dubai students.',
    ogTitle: 'UAE Math Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade UAE MOE Math curriculum guide for parents. Algebra, Geometry, Statistics for Grades 5–10 by EduVerseJr.',
  },
};

// ─────────────────────────────────────────────────────────────────────
// Science curriculum pages — one entry per country slug
// ─────────────────────────────────────────────────────────────────────
const scienceCurriculumMeta = {
  'united-states': {
    title: 'US Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s US Science Curriculum guide for Grades 5–10. Covers NGSS-aligned Biology, Chemistry, Physics and Earth Science. Expert 1-on-1 online Science teaching for US students.',
    ogTitle: 'US Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade US NGSS Science curriculum guide for parents. Biology, Chemistry, Physics and Earth Science for Grades 5–10.',
  },
  'united-kingdom': {
    title: 'UK Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s UK Science Curriculum guide for Grades 5–10. Covers KS2–KS4 Biology, Chemistry, Physics. Expert 1-on-1 online Science teaching for UK students.',
    ogTitle: 'UK Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade UK National Curriculum Science guide for parents. Biology, Chemistry, Physics for KS2–KS4.',
  },
  'canada': {
    title: 'Canadian Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s Canadian Science Curriculum guide for Grades 5–10. Provincial-aligned Biology, Chemistry, Physics and Earth Science. Expert 1-on-1 online Science teaching for Canadian students.',
    ogTitle: 'Canadian Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Canadian provincial Science curriculum guide for parents. Biology, Chemistry, Physics for Grades 5–10.',
  },
  'australia': {
    title: 'Australian Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s Australian Science Curriculum guide for Grades 5–10. ACARA-aligned Biology, Chemistry, Physics and Earth Science. Expert 1-on-1 online Science teaching for Australian students.',
    ogTitle: 'Australian Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Australian ACARA Science curriculum guide for parents. Biology, Chemistry, Physics for Years 5–10.',
  },
  'singapore': {
    title: 'Singapore Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s Singapore Science Curriculum guide for Grades 5–10. MOE-aligned Biology, Chemistry, Physics. Expert 1-on-1 online Science teaching for Singapore students.',
    ogTitle: 'Singapore Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade Singapore MOE Science curriculum guide for parents. Biology, Chemistry, Physics for Primary 5 to Secondary 4.',
  },
  'uae': {
    title: 'UAE Science Curriculum Grades 5–10 | EduVerseJr Online Science Teacher',
    description: 'Explore EduVerseJr\'s UAE Science Curriculum guide for Grades 5–10. UAE MOE-aligned Biology, Chemistry, Physics. Expert 1-on-1 online Science teaching for UAE and Dubai students.',
    ogTitle: 'UAE Science Curriculum Grades 5–10 — EduVerseJr',
    ogDesc: 'Grade-by-grade UAE MOE Science curriculum guide for parents. Biology, Chemistry, Physics for Cycle 2 & 3.',
  },
};

// ─────────────────────────────────────────────────────────────────────
// Meta-injection helper — replaces title, description, og:* and adds canonical
// ─────────────────────────────────────────────────────────────────────
function injectMeta(html, meta, canonicalUrl) {
  if (!meta) return html;

  // <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );

  // <meta name="description">
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${meta.description}" />`
  );

  // og:title
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${meta.ogTitle}" />`
  );

  // og:description
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${meta.ogDesc}" />`
  );

  // og:url
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // twitter:url
  html = html.replace(
    /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:url" content="${canonicalUrl}" />`
  );

  // twitter:title
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${meta.ogTitle}" />`
  );

  // twitter:description
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${meta.ogDesc}" />`
  );

  // <link rel="canonical"> — insert after </title> or replace existing
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

// ─────────────────────────────────────────────────────────────────────
// Generate flat HTML files
// ─────────────────────────────────────────────────────────────────────
const publicDir = path.join(__dirname, 'dist', 'public');

// Top-level pages → /dist/public/<page>.html
Object.entries(topLevelMeta).forEach(([page, meta]) => {
  const canonicalUrl = `https://eduversejr.com/${page}`;
  const pageHtml = injectMeta(indexHtml, meta, canonicalUrl);
  const flatHtmlPath = path.join(publicDir, `${page}.html`);
  fs.writeFileSync(flatHtmlPath, pageHtml, 'utf-8');
  console.log(`✓ Created ${page}.html (unique meta)`);
});

// Math curriculum pages → /dist/public/curriculum/<country>.html
const curriculumDir = path.join(publicDir, 'curriculum');
if (!fs.existsSync(curriculumDir)) {
  fs.mkdirSync(curriculumDir, { recursive: true });
}
Object.entries(curriculumMeta).forEach(([page, meta]) => {
  const canonicalUrl = `https://eduversejr.com/curriculum/${page}`;
  const pageHtml = injectMeta(indexHtml, meta, canonicalUrl);
  const flatHtmlPath = path.join(curriculumDir, `${page}.html`);
  fs.writeFileSync(flatHtmlPath, pageHtml, 'utf-8');
  console.log(`✓ Created curriculum/${page}.html (unique meta)`);
});

// Science curriculum pages → /dist/public/science-curriculum/<country>.html
const scienceCurriculumDir = path.join(publicDir, 'science-curriculum');
if (!fs.existsSync(scienceCurriculumDir)) {
  fs.mkdirSync(scienceCurriculumDir, { recursive: true });
}
Object.entries(scienceCurriculumMeta).forEach(([page, meta]) => {
  const canonicalUrl = `https://eduversejr.com/science-curriculum/${page}`;
  const pageHtml = injectMeta(indexHtml, meta, canonicalUrl);
  const flatHtmlPath = path.join(scienceCurriculumDir, `${page}.html`);
  fs.writeFileSync(flatHtmlPath, pageHtml, 'utf-8');
  console.log(`✓ Created science-curriculum/${page}.html (unique meta)`);
});

// 404 fallback
const notFoundPath = path.join(publicDir, '404.html');
fs.writeFileSync(notFoundPath, indexHtml, 'utf-8');
console.log(`✓ Created 404.html`);

const total =
  Object.keys(topLevelMeta).length +
  Object.keys(curriculumMeta).length +
  Object.keys(scienceCurriculumMeta).length +
  1;
console.log(`\n✅ Generated ${total} SPA pages with unique meta tags.`);

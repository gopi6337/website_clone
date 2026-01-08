#!/usr/bin/env node

/**
 * EduVerseJr - SEO Testing Links Generator
 *
 * Generates clickable HTML page with all testing tool links
 *
 * Usage:
 *   node generate-test-links.js
 *   node generate-test-links.js https://www.eduversejr.com
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = process.argv[2] || 'https://www.eduversejr.com';

// All pages to test
const pages = [
  { url: '/', name: 'Homepage' },
  { url: '/curriculum/united-states', name: 'US Math Curriculum' },
  { url: '/curriculum/united-kingdom', name: 'UK Math Curriculum' },
  { url: '/curriculum/canada', name: 'Canada Math Curriculum' },
  { url: '/curriculum/australia', name: 'Australia Math Curriculum' },
  { url: '/curriculum/singapore', name: 'Singapore Math Curriculum' },
  { url: '/curriculum/uae-(dubai)', name: 'UAE Math Curriculum' },
];

// Testing tools
const tools = {
  facebook: {
    name: 'Facebook Sharing Debugger',
    baseUrl: 'https://developers.facebook.com/tools/debug/?q=',
    icon: '📘',
  },
  twitter: {
    name: 'Twitter Card Validator',
    baseUrl: 'https://cards-dev.twitter.com/validator?url=',
    icon: '🐦',
  },
  linkedin: {
    name: 'LinkedIn Post Inspector',
    baseUrl: 'https://www.linkedin.com/post-inspector/inspect/',
    icon: '💼',
  },
  richResults: {
    name: 'Google Rich Results Test',
    baseUrl: 'https://search.google.com/test/rich-results?url=',
    icon: '🔍',
  },
  schemaValidator: {
    name: 'Schema.org Validator',
    baseUrl: 'https://validator.schema.org/#url=',
    icon: '📋',
  },
};

/**
 * Generate HTML page with testing links
 */
function generateHTML() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EduVerseJr - SEO Testing Links</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 2rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
      padding: 2rem;
    }

    h1 {
      color: #2563eb;
      margin-bottom: 0.5rem;
      font-size: 2rem;
    }

    .subtitle {
      color: #6b7280;
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    .site-url {
      background: #f3f4f6;
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 2rem;
      border-left: 4px solid #2563eb;
    }

    .site-url strong {
      color: #2563eb;
    }

    .section {
      margin-bottom: 3rem;
    }

    .section h2 {
      color: #1f2937;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e5e7eb;
      font-size: 1.5rem;
    }

    .tool-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .tool-card {
      background: #f9fafb;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      padding: 1.5rem;
      transition: all 0.3s ease;
    }

    .tool-card:hover {
      border-color: #2563eb;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
    }

    .tool-card h3 {
      color: #1f2937;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .tool-card .icon {
      font-size: 1.5rem;
    }

    .page-list {
      list-style: none;
    }

    .page-list li {
      margin-bottom: 0.5rem;
    }

    .btn {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: #2563eb;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-size: 0.9rem;
      transition: background 0.3s ease;
    }

    .btn:hover {
      background: #1d4ed8;
    }

    .btn-small {
      padding: 0.4rem 0.8rem;
      font-size: 0.85rem;
    }

    .quick-links {
      background: #fef3c7;
      border: 2px solid #fbbf24;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    .quick-links h3 {
      color: #92400e;
      margin-bottom: 1rem;
    }

    .quick-links-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }

    .quick-link-btn {
      background: white;
      border: 1px solid #fbbf24;
      padding: 0.75rem;
      border-radius: 6px;
      text-align: center;
      text-decoration: none;
      color: #92400e;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .quick-link-btn:hover {
      background: #fbbf24;
      color: white;
    }

    .file-links {
      background: #dbeafe;
      border: 2px solid #2563eb;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    .file-links h3 {
      color: #1e40af;
      margin-bottom: 1rem;
    }

    .file-link {
      display: block;
      margin: 0.5rem 0;
      color: #2563eb;
      text-decoration: none;
      font-weight: 500;
    }

    .file-link:hover {
      text-decoration: underline;
    }

    .footer {
      margin-top: 3rem;
      padding-top: 2rem;
      border-top: 2px solid #e5e7eb;
      text-align: center;
      color: #6b7280;
    }

    .status-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: #10b981;
      color: white;
      border-radius: 12px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-left: 0.5rem;
    }

    @media (max-width: 768px) {
      .container {
        padding: 1rem;
      }

      h1 {
        font-size: 1.5rem;
      }

      .tool-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 EduVerseJr SEO Testing Dashboard <span class="status-badge">READY</span></h1>
    <p class="subtitle">One-click access to all SEO validation and testing tools</p>

    <div class="site-url">
      <strong>Testing Site:</strong> <code>${SITE_URL}</code>
    </div>

    <!-- Quick Direct Links -->
    <div class="quick-links">
      <h3>⚡ Quick Access - Important Files</h3>
      <div class="quick-links-grid">
        <a href="${SITE_URL}/robots.txt" target="_blank" class="quick-link-btn">🤖 View robots.txt</a>
        <a href="${SITE_URL}/sitemap.xml" target="_blank" class="quick-link-btn">🗺️ View sitemap.xml</a>
        <a href="${SITE_URL}/" target="_blank" class="quick-link-btn">🏠 View Homepage</a>
      </div>
    </div>

    <!-- Search Console Links -->
    <div class="file-links">
      <h3>🔧 Search Engine Setup</h3>
      <a href="https://search.google.com/search-console/" target="_blank" class="file-link">
        → Google Search Console
      </a>
      <a href="https://www.bing.com/webmasters/" target="_blank" class="file-link">
        → Bing Webmaster Tools
      </a>
      <a href="https://analytics.google.com/" target="_blank" class="file-link">
        → Google Analytics
      </a>
    </div>

    <!-- Homepage Testing -->
    <div class="section">
      <h2>🏠 Homepage Testing</h2>
      <div class="tool-grid">
        ${Object.entries(tools).map(([key, tool]) => `
          <div class="tool-card">
            <h3><span class="icon">${tool.icon}</span> ${tool.name}</h3>
            <a href="${tool.baseUrl}${encodeURIComponent(SITE_URL + '/')}" target="_blank" class="btn btn-small">
              Test Homepage →
            </a>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- All Pages Testing -->
    <div class="section">
      <h2>📄 Test All Pages</h2>
      ${pages.map(page => `
        <div class="tool-card" style="margin-bottom: 1.5rem;">
          <h3>${page.name}</h3>
          <p style="color: #6b7280; margin-bottom: 1rem; font-size: 0.9rem;">
            <code>${SITE_URL}${page.url}</code>
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            <a href="${tools.facebook.baseUrl}${encodeURIComponent(SITE_URL + page.url)}" target="_blank" class="btn btn-small">
              ${tools.facebook.icon} Facebook
            </a>
            <a href="${tools.twitter.baseUrl}${encodeURIComponent(SITE_URL + page.url)}" target="_blank" class="btn btn-small">
              ${tools.twitter.icon} Twitter
            </a>
            <a href="${tools.richResults.baseUrl}${encodeURIComponent(SITE_URL + page.url)}" target="_blank" class="btn btn-small">
              ${tools.richResults.icon} Rich Results
            </a>
            <a href="${SITE_URL}${page.url}" target="_blank" class="btn btn-small" style="background: #6b7280;">
              🔗 Visit Page
            </a>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Additional Tools -->
    <div class="section">
      <h2>🛠️ Additional SEO Tools</h2>
      <div class="tool-grid">
        <div class="tool-card">
          <h3>📊 PageSpeed Insights</h3>
          <a href="https://pagespeed.web.dev/?url=${encodeURIComponent(SITE_URL)}" target="_blank" class="btn btn-small">
            Test Performance →
          </a>
        </div>
        <div class="tool-card">
          <h3>📱 Mobile-Friendly Test</h3>
          <a href="https://search.google.com/test/mobile-friendly?url=${encodeURIComponent(SITE_URL)}" target="_blank" class="btn btn-small">
            Test Mobile →
          </a>
        </div>
        <div class="tool-card">
          <h3>🔒 Security Headers</h3>
          <a href="https://securityheaders.com/?q=${encodeURIComponent(SITE_URL)}" target="_blank" class="btn btn-small">
            Check Security →
          </a>
        </div>
        <div class="tool-card">
          <h3>🌐 SSL Labs</h3>
          <a href="https://www.ssllabs.com/ssltest/analyze.html?d=${encodeURIComponent(SITE_URL.replace('https://', '').replace('http://', ''))}" target="_blank" class="btn btn-small">
            Test SSL →
          </a>
        </div>
      </div>
    </div>

    <div class="footer">
      <p><strong>EduVerseJr SEO Implementation</strong></p>
      <p>Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
      <p style="margin-top: 1rem;">
        <small>Bookmark this page for easy access to all testing tools!</small>
      </p>
    </div>
  </div>
</body>
</html>`;

  return html;
}

// Generate and save HTML file
const html = generateHTML();
const outputPath = path.join(__dirname, 'seo-testing-links.html');

fs.writeFileSync(outputPath, html, 'utf8');

console.log('✅ SEO Testing Links page generated!');
console.log(`📄 File: ${outputPath}`);
console.log(`\n🌐 Open in browser:`);
console.log(`   file://${outputPath}`);
console.log(`\n💡 Tip: Bookmark this page for quick access to all testing tools!\n`);

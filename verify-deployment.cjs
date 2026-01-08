#!/usr/bin/env node

/**
 * EduVerseJr - Deployment Verification Script
 *
 * This script verifies that all SEO files and meta tags are properly
 * accessible after deployment.
 *
 * Usage:
 *   node verify-deployment.js
 *   node verify-deployment.js https://www.eduversejr.com
 */

const https = require('https');
const http = require('http');

const SITE_URL = process.argv[2] || 'https://www.eduversejr.com';
const TIMEOUT = 10000; // 10 seconds

console.log('🔍 EduVerseJr Deployment Verification');
console.log('=====================================\n');
console.log(`Testing site: ${SITE_URL}\n`);

// URLs to test
const urls = [
  { path: '/', name: 'Homepage', type: 'page' },
  { path: '/robots.txt', name: 'robots.txt', type: 'file' },
  { path: '/sitemap.xml', name: 'sitemap.xml', type: 'file' },
  { path: '/curriculum/united-states', name: 'US Curriculum', type: 'page' },
  { path: '/curriculum/united-kingdom', name: 'UK Curriculum', type: 'page' },
  { path: '/curriculum/canada', name: 'Canada Curriculum', type: 'page' },
  { path: '/curriculum/australia', name: 'Australia Curriculum', type: 'page' },
  { path: '/curriculum/singapore', name: 'Singapore Curriculum', type: 'page' },
  { path: '/curriculum/uae-(dubai)', name: 'UAE Curriculum', type: 'page' },
];

// Meta tags to verify on homepage
const requiredMetaTags = [
  'meta name="description"',
  'meta property="og:title"',
  'meta property="og:description"',
  'meta property="og:image"',
  'meta name="twitter:card"',
  'script type="application/ld+json"',
  'link rel="canonical"',
];

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

/**
 * Fetch URL and return response
 */
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    const req = protocol.get(url, { timeout: TIMEOUT }, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

/**
 * Test URL accessibility
 */
async function testUrl(urlObj) {
  totalTests++;
  const fullUrl = `${SITE_URL}${urlObj.path}`;

  try {
    const response = await fetchUrl(fullUrl);

    if (response.statusCode === 200) {
      console.log(`✅ ${urlObj.name}: OK (200)`);
      passedTests++;
      return { success: true, response };
    } else {
      console.log(`❌ ${urlObj.name}: FAILED (Status: ${response.statusCode})`);
      failedTests++;
      return { success: false, response };
    }
  } catch (error) {
    console.log(`❌ ${urlObj.name}: ERROR (${error.message})`);
    failedTests++;
    return { success: false, error };
  }
}

/**
 * Verify meta tags in HTML
 */
function verifyMetaTags(html) {
  console.log('\n📋 Verifying Meta Tags on Homepage:');
  console.log('=====================================');

  let metaTestsPassed = 0;
  let metaTestsFailed = 0;

  requiredMetaTags.forEach(tag => {
    totalTests++;
    if (html.includes(tag)) {
      console.log(`✅ Found: ${tag}`);
      passedTests++;
      metaTestsPassed++;
    } else {
      console.log(`❌ Missing: ${tag}`);
      failedTests++;
      metaTestsFailed++;
    }
  });

  console.log(`\nMeta Tags: ${metaTestsPassed}/${requiredMetaTags.length} found\n`);
}

/**
 * Verify robots.txt content
 */
function verifyRobotsTxt(content) {
  console.log('\n🤖 Verifying robots.txt:');
  console.log('========================');

  const checks = [
    { text: 'User-agent:', name: 'User-agent directive' },
    { text: 'Allow: /', name: 'Allow directive' },
    { text: 'Sitemap:', name: 'Sitemap reference' },
  ];

  checks.forEach(check => {
    totalTests++;
    if (content.includes(check.text)) {
      console.log(`✅ ${check.name}: Found`);
      passedTests++;
    } else {
      console.log(`❌ ${check.name}: Missing`);
      failedTests++;
    }
  });

  console.log('');
}

/**
 * Verify sitemap.xml content
 */
function verifySitemap(content) {
  console.log('\n🗺️  Verifying sitemap.xml:');
  console.log('=========================');

  const checks = [
    { text: '<?xml version="1.0"', name: 'XML declaration' },
    { text: '<urlset', name: 'URLset element' },
    { text: '<loc>https://www.eduversejr.com/</loc>', name: 'Homepage URL' },
  ];

  checks.forEach(check => {
    totalTests++;
    if (content.includes(check.text)) {
      console.log(`✅ ${check.name}: Found`);
      passedTests++;
    } else {
      console.log(`❌ ${check.name}: Missing`);
      failedTests++;
    }
  });

  // Count URLs
  const urlCount = (content.match(/<loc>/g) || []).length;
  console.log(`\n📍 Total URLs in sitemap: ${urlCount}`);

  totalTests++;
  if (urlCount === 7) {
    console.log(`✅ Expected 7 URLs, found ${urlCount}`);
    passedTests++;
  } else {
    console.log(`⚠️  Expected 7 URLs, found ${urlCount}`);
    failedTests++;
  }

  console.log('');
}

/**
 * Main verification function
 */
async function runVerification() {
  console.log('📍 Testing URL Accessibility:');
  console.log('=============================\n');

  // Test all URLs
  const results = [];
  for (const urlObj of urls) {
    const result = await testUrl(urlObj);
    results.push({ ...urlObj, ...result });

    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Get homepage HTML for meta tag verification
  const homepageResult = results.find(r => r.path === '/');
  if (homepageResult && homepageResult.success) {
    verifyMetaTags(homepageResult.response.body);
  }

  // Get robots.txt
  const robotsResult = results.find(r => r.path === '/robots.txt');
  if (robotsResult && robotsResult.success) {
    verifyRobotsTxt(robotsResult.response.body);
  }

  // Get sitemap.xml
  const sitemapResult = results.find(r => r.path === '/sitemap.xml');
  if (sitemapResult && sitemapResult.success) {
    verifySitemap(sitemapResult.response.body);
  }

  // Final summary
  console.log('\n📊 Verification Summary:');
  console.log('========================');
  console.log(`Total Tests: ${totalTests}`);
  console.log(`✅ Passed: ${passedTests}`);
  console.log(`❌ Failed: ${failedTests}`);
  console.log(`Success Rate: ${((passedTests / totalTests) * 100).toFixed(1)}%\n`);

  if (failedTests === 0) {
    console.log('🎉 All tests passed! Your site is properly configured.\n');
    process.exit(0);
  } else {
    console.log('⚠️  Some tests failed. Please review the errors above.\n');
    process.exit(1);
  }
}

// Run verification
runVerification().catch(err => {
  console.error('❌ Verification failed:', err.message);
  process.exit(1);
});

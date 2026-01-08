#!/usr/bin/env node

/**
 * EduVerseJr - Pre-Deployment Checklist
 *
 * Validates all SEO files and configurations before deployment
 *
 * Usage: node pre-deployment-check.cjs
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 EduVerseJr Pre-Deployment SEO Check');
console.log('=======================================\n');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const errors = [];
const warnings = [];

/**
 * Check if file exists
 */
function checkFileExists(filePath, description) {
  totalChecks++;
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${description}: Found`);
    passedChecks++;
    return true;
  } else {
    console.log(`❌ ${description}: Missing`);
    errors.push(`Missing file: ${filePath}`);
    failedChecks++;
    return false;
  }
}

/**
 * Check file content contains string
 */
function checkFileContains(filePath, searchString, description) {
  totalChecks++;
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(searchString)) {
      console.log(`✅ ${description}: Found`);
      passedChecks++;
      return true;
    } else {
      console.log(`❌ ${description}: Missing`);
      errors.push(`${description} not found in ${filePath}`);
      failedChecks++;
      return false;
    }
  } catch (err) {
    console.log(`❌ ${description}: Error reading file`);
    errors.push(`Cannot read ${filePath}: ${err.message}`);
    failedChecks++;
    return false;
  }
}

/**
 * Count occurrences in file
 */
function countInFile(filePath, searchString) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return (content.match(new RegExp(searchString, 'g')) || []).length;
  } catch (err) {
    return 0;
  }
}

/**
 * Check build files
 */
function checkBuildFiles() {
  console.log('📦 Checking Build Files:');
  console.log('========================\n');

  const distIndexPath = path.join(__dirname, 'dist', 'public', 'index.html');
  const distRobotsPath = path.join(__dirname, 'dist', 'public', 'robots.txt');
  const distSitemapPath = path.join(__dirname, 'dist', 'public', 'sitemap.xml');

  checkFileExists(distIndexPath, 'dist/public/index.html');
  checkFileExists(distRobotsPath, 'dist/public/robots.txt');
  checkFileExists(distSitemapPath, 'dist/public/sitemap.xml');

  console.log('');
}

/**
 * Check source files
 */
function checkSourceFiles() {
  console.log('📁 Checking Source Files:');
  console.log('=========================\n');

  const sourceFiles = [
    { path: 'client/index.html', desc: 'Main HTML file' },
    { path: 'client/public/robots.txt', desc: 'robots.txt' },
    { path: 'client/public/sitemap.xml', desc: 'sitemap.xml' },
    { path: 'client/src/main.tsx', desc: 'Main TypeScript file' },
    { path: 'client/src/pages/Home.tsx', desc: 'Home page component' },
    { path: 'client/src/pages/CurriculumViewer.tsx', desc: 'Curriculum viewer' },
    { path: 'client/src/pages/NotFound.tsx', desc: '404 page component' },
  ];

  sourceFiles.forEach(file => {
    checkFileExists(path.join(__dirname, file.path), file.desc);
  });

  console.log('');
}

/**
 * Check meta tags in index.html
 */
function checkMetaTags() {
  console.log('🏷️  Checking Meta Tags:');
  console.log('=======================\n');

  const indexPath = path.join(__dirname, 'client', 'index.html');

  const metaTags = [
    { search: 'meta name="description"', desc: 'Meta description' },
    { search: 'meta name="keywords"', desc: 'Meta keywords' },
    { search: 'meta property="og:title"', desc: 'Open Graph title' },
    { search: 'meta property="og:description"', desc: 'Open Graph description' },
    { search: 'meta property="og:image"', desc: 'Open Graph image' },
    { search: 'meta property="og:url"', desc: 'Open Graph URL' },
    { search: 'meta name="twitter:card"', desc: 'Twitter Card type' },
    { search: 'meta name="twitter:title"', desc: 'Twitter title' },
    { search: 'meta name="twitter:description"', desc: 'Twitter description' },
    { search: 'link rel="canonical"', desc: 'Canonical URL' },
  ];

  metaTags.forEach(tag => {
    checkFileContains(indexPath, tag.search, tag.desc);
  });

  console.log('');
}

/**
 * Check structured data
 */
function checkStructuredData() {
  console.log('📊 Checking Structured Data:');
  console.log('============================\n');

  const indexPath = path.join(__dirname, 'client', 'index.html');

  checkFileContains(indexPath, 'application/ld+json', 'JSON-LD script tag');
  checkFileContains(indexPath, '"@type": "EducationalOrganization"', 'EducationalOrganization schema');
  checkFileContains(indexPath, '"@type": "WebSite"', 'WebSite schema');
  checkFileContains(indexPath, 'areaServed', 'Areas served property');
  checkFileContains(indexPath, 'offers', 'Offers property');

  console.log('');
}

/**
 * Check robots.txt
 */
function checkRobotsTxt() {
  console.log('🤖 Checking robots.txt:');
  console.log('=======================\n');

  const robotsPath = path.join(__dirname, 'client', 'public', 'robots.txt');

  checkFileContains(robotsPath, 'User-agent:', 'User-agent directive');
  checkFileContains(robotsPath, 'Allow: /', 'Allow directive');
  checkFileContains(robotsPath, 'Sitemap:', 'Sitemap reference');
  checkFileContains(robotsPath, 'https://www.eduversejr.com/sitemap.xml', 'Sitemap URL');

  console.log('');
}

/**
 * Check sitemap.xml
 */
function checkSitemap() {
  console.log('🗺️  Checking sitemap.xml:');
  console.log('========================\n');

  const sitemapPath = path.join(__dirname, 'client', 'public', 'sitemap.xml');

  checkFileContains(sitemapPath, '<?xml version="1.0"', 'XML declaration');
  checkFileContains(sitemapPath, '<urlset', 'URLset element');
  checkFileContains(sitemapPath, 'https://www.eduversejr.com/', 'Homepage URL');
  checkFileContains(sitemapPath, '/curriculum/united-states', 'US curriculum URL');
  checkFileContains(sitemapPath, '/curriculum/united-kingdom', 'UK curriculum URL');

  // Count total URLs
  const urlCount = countInFile(sitemapPath, '<loc>');
  console.log(`\n📍 Total URLs in sitemap: ${urlCount}`);

  totalChecks++;
  if (urlCount === 7) {
    console.log(`✅ Expected 7 URLs, found ${urlCount}`);
    passedChecks++;
  } else {
    console.log(`⚠️  Expected 7 URLs, found ${urlCount}`);
    warnings.push(`Expected 7 URLs in sitemap, found ${urlCount}`);
    failedChecks++;
  }

  console.log('');
}

/**
 * Check React Helmet configuration
 */
function checkReactHelmet() {
  console.log('⚛️  Checking React Helmet:');
  console.log('=========================\n');

  const mainPath = path.join(__dirname, 'client', 'src', 'main.tsx');
  const homePath = path.join(__dirname, 'client', 'src', 'pages', 'Home.tsx');
  const curriculumPath = path.join(__dirname, 'client', 'src', 'pages', 'CurriculumViewer.tsx');

  checkFileContains(mainPath, 'HelmetProvider', 'HelmetProvider in main.tsx');
  checkFileContains(mainPath, 'react-helmet-async', 'react-helmet-async import');
  checkFileContains(homePath, 'Helmet', 'Helmet in Home.tsx');
  checkFileContains(homePath, '<Helmet>', 'Helmet component in Home');
  checkFileContains(curriculumPath, 'Helmet', 'Helmet in CurriculumViewer.tsx');
  checkFileContains(curriculumPath, '<Helmet>', 'Helmet component in Curriculum');

  console.log('');
}

/**
 * Check package.json dependencies
 */
function checkDependencies() {
  console.log('📦 Checking Dependencies:');
  console.log('=========================\n');

  const packagePath = path.join(__dirname, 'package.json');

  checkFileContains(packagePath, 'react-helmet-async', 'react-helmet-async dependency');

  console.log('');
}

/**
 * Check documentation files
 */
function checkDocumentation() {
  console.log('📚 Checking Documentation:');
  console.log('==========================\n');

  const docs = [
    { path: 'SEO_SETUP_GUIDE.md', desc: 'SEO Setup Guide' },
    { path: 'SOCIAL_MEDIA_TESTING.md', desc: 'Social Media Testing Guide' },
    { path: 'SEO_VERIFICATION_CHECKLIST.md', desc: 'Verification Checklist' },
    { path: 'SEO_IMPLEMENTATION_SUMMARY.md', desc: 'Implementation Summary' },
    { path: 'README_SEO.md', desc: 'SEO Quick Start' },
  ];

  docs.forEach(doc => {
    checkFileExists(path.join(__dirname, doc.path), doc.desc);
  });

  console.log('');
}

/**
 * Print summary
 */
function printSummary() {
  console.log('📊 Pre-Deployment Check Summary:');
  console.log('=================================\n');

  console.log(`Total Checks: ${totalChecks}`);
  console.log(`✅ Passed: ${passedChecks}`);
  console.log(`❌ Failed: ${failedChecks}`);
  console.log(`Success Rate: ${((passedChecks / totalChecks) * 100).toFixed(1)}%\n`);

  if (errors.length > 0) {
    console.log('🚨 ERRORS:');
    errors.forEach((error, i) => console.log(`  ${i + 1}. ${error}`));
    console.log('');
  }

  if (warnings.length > 0) {
    console.log('⚠️  WARNINGS:');
    warnings.forEach((warning, i) => console.log(`  ${i + 1}. ${warning}`));
    console.log('');
  }

  if (failedChecks === 0) {
    console.log('🎉 All checks passed! Your site is ready for deployment.\n');
    console.log('Next steps:');
    console.log('  1. Build: npm run build');
    console.log('  2. Deploy dist/ folder to your hosting');
    console.log('  3. Run: node verify-deployment.cjs (after deployment)');
    console.log('  4. Open: seo-testing-links.html (for testing tools)\n');
  } else {
    console.log('⚠️  Some checks failed. Please fix the errors above before deployment.\n');
    console.log('Common fixes:');
    console.log('  - Run: npm run build');
    console.log('  - Ensure all source files exist');
    console.log('  - Verify meta tags in client/index.html\n');
  }
}

// Run all checks
console.log('Starting pre-deployment checks...\n');

checkSourceFiles();
checkMetaTags();
checkStructuredData();
checkRobotsTxt();
checkSitemap();
checkReactHelmet();
checkDependencies();
checkDocumentation();
checkBuildFiles();

printSummary();

// Exit with appropriate code
process.exit(failedChecks === 0 ? 0 : 1);

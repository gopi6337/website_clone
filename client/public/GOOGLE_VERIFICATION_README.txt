================================================================================
Google Search Console Verification - Instructions
================================================================================

When you verify your site with Google Search Console, you'll receive an HTML
verification file. Place that file in this directory (client/public/).

STEPS:
------

1. Go to: https://search.google.com/search-console/

2. Click "Add Property" and enter: https://www.eduversejr.com

3. Choose verification method: "HTML file upload"

4. Google will provide a file like: google1234567890abcdef.html

5. Download that file

6. Place it here: client/public/google1234567890abcdef.html

7. Rebuild your project: npm run build

8. Deploy to production

9. Return to Google Search Console and click "Verify"

10. Your site will be verified!


ALTERNATIVE VERIFICATION METHODS:
----------------------------------

If you don't want to use HTML file upload, you can use:

- DNS TXT record (requires domain access)
- Meta tag (add to index.html <head>)
- Google Analytics tracking code (if already installed)
- Google Tag Manager (if already installed)


EXAMPLE FILE STRUCTURE:
-----------------------

client/public/
├── logo.jpg
├── robots.txt
├── sitemap.xml
├── google1234567890abcdef.html  ← Your verification file goes here
└── GOOGLE_VERIFICATION_README.txt (this file)


After verification, you can optionally remove the HTML file, but it's
recommended to keep it in case you need to re-verify in the future.


================================================================================
Bing Webmaster Tools Verification (Optional)
================================================================================

For Bing, you can:

1. Import from Google Search Console (easiest - automatic)
   OR
2. Place a BingSiteAuth.xml file here: client/public/BingSiteAuth.xml

The import method is recommended as it's faster and automatic.


================================================================================

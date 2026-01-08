# Social Media & SEO Testing Quick Reference

Quick links and steps to test your SEO implementation across different platforms.

---

## 🔗 Quick Test Links

### Your URLs to Test:

**Homepage**:
```
https://www.eduversejr.com/
```

**Curriculum Pages**:
```
https://www.eduversejr.com/curriculum/united-states
https://www.eduversejr.com/curriculum/united-kingdom
https://www.eduversejr.com/curriculum/canada
https://www.eduversejr.com/curriculum/australia
https://www.eduversejr.com/curriculum/singapore
https://www.eduversejr.com/curriculum/uae-(dubai)
```

---

## 1️⃣ Facebook/Meta Testing

### Tool: Facebook Sharing Debugger
**URL**: https://developers.facebook.com/tools/debug/

### Steps:
1. Enter your URL
2. Click **"Debug"**
3. Review the preview

### What to Check:
- ✅ **og:title** displays correctly
- ✅ **og:description** shows the right content
- ✅ **og:image** appears (your logo)
- ✅ **og:type** is "website"
- ✅ No warnings or errors

### Refresh Cache:
If you make changes, click **"Scrape Again"** to clear Facebook's cache.

---

## 2️⃣ Twitter Testing

### Tool: Twitter Card Validator
**URL**: https://cards-dev.twitter.com/validator

### Steps:
1. Enter your URL
2. Click **"Preview card"**
3. Review the preview

### What to Check:
- ✅ Card type: "Summary with large image"
- ✅ Title appears
- ✅ Description appears
- ✅ Image displays

### Note:
Twitter may take a few minutes to update cache. Test again if changes don't appear immediately.

---

## 3️⃣ LinkedIn Testing

### Tool: LinkedIn Post Inspector
**URL**: https://www.linkedin.com/post-inspector/

### Steps:
1. Enter your URL
2. Click **"Inspect"**
3. Review results

### What to Check:
- ✅ Title displays
- ✅ Description displays
- ✅ Image appears
- ✅ No errors shown

---

## 4️⃣ Google Rich Results

### Tool: Google Rich Results Test
**URL**: https://search.google.com/test/rich-results

### Steps:
1. Enter your URL
2. Click **"Test URL"**
3. Wait for analysis
4. Review detected structured data

### What to Check:
- ✅ **EducationalOrganization** detected
- ✅ **WebSite** detected
- ✅ 0 Errors
- ✅ All properties valid

### Expected Schemas:
```
✓ EducationalOrganization
  - name: EduVerseJr
  - offers: 2 programs
  - areaServed: 6 countries

✓ WebSite
  - name: EduVerseJr
  - potentialAction: SearchAction
```

---

## 5️⃣ Schema.org Validation

### Tool: Schema Markup Validator
**URL**: https://validator.schema.org/

### Steps:
1. Enter your URL
2. Click **"Run Test"**
3. Review validation results

### What to Check:
- ✅ No errors
- ✅ JSON-LD detected
- ✅ All required properties present

---

## 6️⃣ Google Search Console

### Tool: Google Search Console
**URL**: https://search.google.com/search-console/

### Initial Setup:
1. Add property: `https://www.eduversejr.com`
2. Verify ownership (HTML file method)
3. Submit sitemap: `sitemap.xml`
4. Request indexing for all pages

### What to Monitor:
- ✅ Pages indexed: 7/7
- ✅ Coverage: No errors
- ✅ Mobile usability: No issues
- ✅ Core Web Vitals: All "Good"

---

## 7️⃣ Bing Webmaster Tools

### Tool: Bing Webmaster Tools
**URL**: https://www.bing.com/webmasters/

### Initial Setup:
1. Add site
2. Import from Google Search Console (easiest)
3. Submit sitemap

### What to Monitor:
- ✅ Pages indexed
- ✅ Crawl errors: 0
- ✅ SEO analyzer score

---

## 📱 Manual Social Media Test

### Test Actual Sharing:

1. **Copy your homepage URL**: `https://www.eduversejr.com/`

2. **Paste in social media**:
   - Facebook post composer
   - Twitter tweet composer
   - LinkedIn post composer

3. **Check the preview**:
   - Image appears
   - Title is correct
   - Description is appealing

4. **Don't post** (unless you want to share!)
   - Just verify the preview looks good
   - Delete the draft

---

## ✅ Checklist - Test All Platforms

Copy this checklist and mark items as you test:

### Homepage Tests:
- [ ] Facebook Debugger - Homepage
- [ ] Twitter Card Validator - Homepage
- [ ] LinkedIn Inspector - Homepage
- [ ] Google Rich Results - Homepage
- [ ] Schema.org Validator - Homepage

### Curriculum Page Tests (sample 2-3):
- [ ] Facebook Debugger - US Curriculum
- [ ] Twitter Card Validator - UK Curriculum
- [ ] LinkedIn Inspector - Canada Curriculum

### Search Engine Setup:
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google
- [ ] Bing Webmaster Tools verified
- [ ] Sitemap submitted to Bing
- [ ] Request indexing for all 7 pages

---

## 🎯 Expected Results

### Good Signs ✅:
1. All validators show **0 errors**
2. Images display in previews
3. Titles and descriptions appear correctly
4. Structured data detected
5. No warnings about missing tags

### Red Flags 🚨:
1. Missing og:image
2. Error messages in validators
3. "Could not fetch URL" errors
4. Missing required schema properties
5. Duplicate meta tags

---

## 🔧 Troubleshooting

### Problem: Image Not Showing

**Solution**:
1. Ensure image URL is absolute: `https://www.eduversejr.com/logo.jpg`
2. Check image is accessible (not behind auth)
3. Verify image size (min 200x200px, recommended 1200x630px)
4. Clear cache and test again

### Problem: Wrong Title/Description Showing

**Solution**:
1. Check React Helmet is rendering correctly
2. Verify `<Helmet>` tags in component
3. Clear browser cache
4. Use "Scrape Again" in Facebook Debugger
5. Wait a few minutes for cache to clear

### Problem: Structured Data Not Detected

**Solution**:
1. Verify JSON-LD script in HTML source
2. Check for syntax errors in JSON
3. Ensure proper schema.org types
4. Test with Schema.org validator first

---

## 📊 Testing Schedule

### After Initial Deployment:
- **Day 1**: Test all validators immediately
- **Day 2**: Retest if fixes were made
- **Day 3**: Submit to search engines
- **Week 1**: Monitor indexing status
- **Week 2**: Check search appearance

### Ongoing:
- **Monthly**: Spot-check social previews
- **When updating content**: Retest affected pages
- **After redesigns**: Full validation sweep

---

## 🎓 Best Practices

1. **Test Before Sharing**: Always validate before sharing on social media
2. **Keep Images Updated**: Ensure og:image exists and loads fast
3. **Write Compelling Descriptions**: Your meta description sells the click
4. **Monitor Analytics**: Track which platforms drive traffic
5. **Update Regularly**: Refresh content and test quarterly

---

## 📞 Support Resources

- **Facebook Debugger Issues**: https://developers.facebook.com/support
- **Twitter Card Help**: https://developer.twitter.com/en/docs/twitter-for-websites/cards
- **Open Graph Protocol**: https://ogp.me/
- **Schema.org Docs**: https://schema.org/docs/gs.html
- **Google Search Central**: https://developers.google.com/search/docs

---

**Quick Tip**: Bookmark all validator URLs for easy access during testing!

---

**Last Updated**: January 8, 2026

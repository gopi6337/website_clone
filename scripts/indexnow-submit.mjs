// IndexNow submitter — notifies Bing, Yandex and other IndexNow search engines
// to (re)crawl our URLs. Reads the URL list from client/public/sitemap.xml so
// it stays in sync automatically. Run after a deploy:  npm run indexnow
//
// The key file (client/public/<key>.txt) must be live at the domain root first
// so IndexNow can verify ownership. Google does not use IndexNow (it ignores
// the ping harmlessly); Bing/Yandex/Seznam/Naver do.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const HOST = 'eduversejr.com';
const KEY = '5960852a1edc861125a567f71385e9b4';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const sitemap = fs.readFileSync(
  path.join(__dirname, '..', 'client', 'public', 'sitemap.xml'),
  'utf-8',
);
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

if (!urlList.length) {
  console.error('No <loc> URLs found in sitemap.xml — aborting.');
  process.exit(1);
}

console.log(`Submitting ${urlList.length} URLs to IndexNow (${ENDPOINT})…`);

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

// IndexNow returns 200 (accepted) or 202 (accepted, pending verification).
console.log(`IndexNow response: ${res.status} ${res.statusText}`);
if (res.status === 200 || res.status === 202) {
  console.log('✅ Submitted successfully.');
} else {
  const body = await res.text().catch(() => '');
  console.error('⚠️  Unexpected status.', body.slice(0, 500));
  process.exit(1);
}

#!/usr/bin/env python3
import cloudscraper
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import os
import time
from pathlib import Path

class WebsiteCloner:
    def __init__(self, base_url, output_dir="cloned_website"):
        self.base_url = base_url
        self.output_dir = output_dir
        self.downloaded_urls = set()

        # Use cloudscraper instead of requests to bypass Cloudflare
        self.session = cloudscraper.create_scraper(
            browser={
                'browser': 'chrome',
                'platform': 'windows',
                'desktop': True
            }
        )

        # Set additional browser-like headers
        self.session.headers.update({
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Cache-Control': 'max-age=0'
        })

    def download_file(self, url, local_path):
        """Download a file from URL to local path"""
        try:
            response = self.session.get(url, timeout=30)
            response.raise_for_status()

            # Create directory if it doesn't exist
            os.makedirs(os.path.dirname(local_path), exist_ok=True)

            # Write file
            with open(local_path, 'wb') as f:
                f.write(response.content)

            print(f"Downloaded: {url}")
            return True
        except Exception as e:
            print(f"Failed to download {url}: {str(e)}")
            return False

    def get_local_path(self, url):
        """Convert URL to local file path"""
        parsed = urlparse(url)
        path = parsed.path

        if path == '' or path == '/':
            path = '/index.html'
        elif not os.path.splitext(path)[1]:
            path = path + '/index.html'

        # Remove leading slash and join with output dir
        local_path = os.path.join(self.output_dir, parsed.netloc, path.lstrip('/'))
        return local_path

    def clone_page(self, url):
        """Clone a single page and its assets"""
        if url in self.downloaded_urls:
            return

        print(f"\nCloning: {url}")
        self.downloaded_urls.add(url)

        try:
            response = self.session.get(url, timeout=30)
            print(f"Status Code: {response.status_code}")
            print(f"Response Headers: {dict(response.headers)}")
            print(f"Response Text (first 500 chars): {response.text[:500]}")
            response.raise_for_status()

            content_type = response.headers.get('content-type', '')

            if 'text/html' in content_type:
                # Parse HTML
                soup = BeautifulSoup(response.content, 'html.parser')

                # Download CSS files
                for link in soup.find_all('link', rel='stylesheet'):
                    if link.get('href'):
                        css_url = urljoin(url, link['href'])
                        if self.base_url in css_url:
                            css_path = self.get_local_path(css_url)
                            if self.download_file(css_url, css_path):
                                link['href'] = os.path.relpath(css_path, os.path.dirname(self.get_local_path(url)))

                # Download JavaScript files
                for script in soup.find_all('script', src=True):
                    js_url = urljoin(url, script['src'])
                    if self.base_url in js_url:
                        js_path = self.get_local_path(js_url)
                        if self.download_file(js_url, js_path):
                            script['src'] = os.path.relpath(js_path, os.path.dirname(self.get_local_path(url)))

                # Download images
                for img in soup.find_all('img', src=True):
                    img_url = urljoin(url, img['src'])
                    img_path = self.get_local_path(img_url)
                    if self.download_file(img_url, img_path):
                        img['src'] = os.path.relpath(img_path, os.path.dirname(self.get_local_path(url)))

                # Download srcset images
                for img in soup.find_all('img', srcset=True):
                    srcset = img['srcset']
                    new_srcset = []
                    for src_item in srcset.split(','):
                        parts = src_item.strip().split()
                        if parts:
                            img_url = urljoin(url, parts[0])
                            img_path = self.get_local_path(img_url)
                            if self.download_file(img_url, img_path):
                                rel_path = os.path.relpath(img_path, os.path.dirname(self.get_local_path(url)))
                                new_srcset.append(f"{rel_path} {' '.join(parts[1:])}" if len(parts) > 1 else rel_path)
                    if new_srcset:
                        img['srcset'] = ', '.join(new_srcset)

                # Save the HTML file
                local_path = self.get_local_path(url)
                os.makedirs(os.path.dirname(local_path), exist_ok=True)
                with open(local_path, 'w', encoding='utf-8') as f:
                    f.write(str(soup))

                print(f"Saved HTML: {local_path}")

            else:
                # Download non-HTML content as-is
                local_path = self.get_local_path(url)
                os.makedirs(os.path.dirname(local_path), exist_ok=True)
                with open(local_path, 'wb') as f:
                    f.write(response.content)
                print(f"Saved: {local_path}")

            time.sleep(0.5)  # Be polite to the server

        except Exception as e:
            print(f"Error cloning {url}: {str(e)}")

    def clone(self):
        """Start cloning the website"""
        print(f"Starting to clone: {self.base_url}")
        self.clone_page(self.base_url)
        print(f"\nCloning complete! Files saved to: {self.output_dir}")

if __name__ == "__main__":
    cloner = WebsiteCloner("https://www.begalileo.com/")
    cloner.clone()

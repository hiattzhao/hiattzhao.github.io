import re, datetime, html
from pathlib import Path
base = 'https://hiattzhao.github.io'
index = Path('index.html').read_text(encoding='utf-8')
hrefs = re.findall(r'href=["\']([^"\'>]+)["\']', index)
urls = set()
for h in hrefs:
    if h.startswith('mailto:') or h.startswith('tel:') or h.startswith('#'):
        continue
    if h.startswith('http://') or h.startswith('https://'):
        if h.startswith(base):
            urls.add(h.rstrip('/'))
        else:
            continue
    else:
        p = h.lstrip('./')
        full = base.rstrip('/') + '/' + p.rstrip('/')
        urls.add(full)
urls.add(base)
urls = sorted(urls)
now = datetime.date.today().isoformat()
entries = []
for u in urls:
    loc = html.escape(u)
    entries.append(f"  <url>\n    <loc>{loc}</loc>\n    <lastmod>{now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>")
if entries:
    entries[0] = entries[0].replace('<priority>0.7</priority>','<priority>1.0</priority>')
xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + '\n'.join(entries) + '\n</urlset>\n'
Path('sitemap.xml').write_text(xml, encoding='utf-8')
print('sitemap.xml created with', len(urls), 'urls')

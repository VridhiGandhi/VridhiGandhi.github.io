#!/usr/bin/env python3
"""Fetch the latest Instagram posts for the site's Travel section.

Reads the token from the IG_TOKEN environment variable (never hard-code it).
Downloads each post's image, center-crops to a square, saves it as a small
WebP in images/travel/, and writes data/instagram.json.

If anything fails, the script exits non-zero WITHOUT touching existing files,
so the site keeps showing the last good posts.
"""
import io, json, os, re, sys, urllib.parse, urllib.request
from datetime import datetime, timezone
from PIL import Image

API_BASE = os.environ.get("IG_API_BASE", "https://graph.instagram.com").rstrip("/")
API_VERSION = os.environ.get("IG_API_VERSION", "v26.0")
TOKEN = os.environ.get("IG_TOKEN", "").strip()
MAX_POSTS = int(os.environ.get("IG_MAX_POSTS", "9"))
SIZE = 640
OUT_DIR = "images/travel"
OUT_JSON = "data/instagram.json"
FIELDS = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp"
PERMALINK_RE = re.compile(r"^https://www\.instagram\.com/")


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "portfolio-instagram-sync/1.0"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def clean_caption(text):
    text = (text or "").strip().split("\n")[0]
    text = re.sub(r"\s+", " ", text)
    return text if len(text) <= 120 else text[:117].rstrip() + "…"


def square_webp(data):
    im = Image.open(io.BytesIO(data)).convert("RGB")
    side = min(im.size)
    left, top = (im.width - side) // 2, (im.height - side) // 2
    im = im.crop((left, top, left + side, top + side)).resize((SIZE, SIZE), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "WEBP", quality=78, method=6)
    return buf.getvalue()


def main():
    if not TOKEN:
        sys.exit("IG_TOKEN is not set")
    query = urllib.parse.urlencode({"fields": FIELDS, "limit": 25, "access_token": TOKEN})
    url = f"{API_BASE}/{API_VERSION}/me/media?{query}" if API_VERSION else f"{API_BASE}/me/media?{query}"
    payload = json.loads(get(url))
    if "data" not in payload:
        sys.exit("Unexpected API response (no 'data')")

    posts, files = [], {}
    for item in payload["data"]:
        if len(posts) >= MAX_POSTS:
            break
        permalink = item.get("permalink", "")
        pid = str(item.get("id", ""))
        if not PERMALINK_RE.match(permalink) or not re.fullmatch(r"\d+", pid):
            continue
        kind = item.get("media_type")
        src = item.get("thumbnail_url") if kind == "VIDEO" else item.get("media_url")
        if not src:
            continue
        try:
            files[pid] = square_webp(get(src))
        except Exception as e:  # skip one bad image, keep going
            print(f"skip {pid}: {e}", file=sys.stderr)
            continue
        cap = clean_caption(item.get("caption"))
        posts.append({
            "id": pid,
            "image": f"{OUT_DIR}/{pid}.webp",
            "caption": cap,
            "alt": cap or "Travel photo from Instagram",
            "permalink": permalink,
            "type": kind,
            "timestamp": item.get("timestamp"),
        })

    if not posts:
        sys.exit("No usable posts returned; leaving existing files untouched")

    os.makedirs(OUT_DIR, exist_ok=True)
    for pid, blob in files.items():
        with open(f"{OUT_DIR}/{pid}.webp", "wb") as f:
            f.write(blob)
    keep = {f"{pid}.webp" for pid in files} | {".gitkeep"}
    for name in os.listdir(OUT_DIR):
        if name not in keep:
            os.remove(os.path.join(OUT_DIR, name))
    with open(OUT_JSON, "w", encoding="utf-8") as f:
        json.dump({"updated": datetime.now(timezone.utc).isoformat(timespec="seconds"), "posts": posts},
                  f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"Wrote {len(posts)} posts")


if __name__ == "__main__":
    main()

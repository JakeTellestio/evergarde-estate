# Evergarde Estate — marketing site

Static multi-page site for Evergarde Estate (Hogsback, Eastern Cape).

## Preview locally

From this folder:

```bash
cd /workspace/evergarde-website
python3 -m http.server 8080
```

Then open [http://127.0.0.1:8080/](http://127.0.0.1:8080/) in a browser.

Or open `index.html` directly in a browser (lightbox and fonts work best via a local server).

Optional npm helper (if you have Node):

```bash
npm start
```

## Pages

| File | Description |
|------|-------------|
| `index.html` | Home — hero, intro, teaser cards |
| `gallery.html` | Photo grid + lightbox |
| `stay.html` | Short-term rentals & bookings email |
| `coffee-shop.html` | Coming soon |
| `nursery.html` | Coming soon (plant nursery) |
| `art-gallery.html` | Coming soon |
| `new-cottage.html` | Coming soon (new cottage) |

## Stack

Plain HTML, CSS (`css/styles.css`), and minimal vanilla JS (`js/main.js`). No build step required. Images live in `images/`.

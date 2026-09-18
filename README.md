# Evergarde Estate — evergarde.com

Static multi-page site for Evergarde Estate (Hogsback, Eastern Cape).

**Domain:** [evergarde.com](https://evergarde.com)  
**Tagline:** A garden in the mist.  
**Address:** 36 Main Road, Hogsback  
**Email:** jake@evergarde.com

Hosted on GitHub Pages from this repository. Relative asset paths keep the site working on GitHub Pages and on the custom domain.

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
| `stay.html` | Stays (Rose Cottage Airbnb + enquiries) |
| `photography.html` | Photo venue — ready to book |
| `coffee-shop.html` | Briar — coming soon |
| `nursery.html` | Rootstock — coming soon |
| `art-gallery.html` | Understory — coming soon |
| `damask-cottage.html` | Damask Cottage — coming soon |
| `rosehip.html` | Rosehip shop — coming soon |
| `glasshouse.html` | The Glasshouse — coming soon |
| `weddings.html` | Wedding venue — coming soon |

## Stack

Plain HTML, CSS (`css/styles.css`), and minimal vanilla JS (`js/main.js`). No build step required. Images live in `images/`.

Brand palette: Amathole, Mist, Lichen, Yellowwood, Old Rose, Ink. Headings: Cormorant / EB Garamond. Body: Source Sans 3 / Inter.

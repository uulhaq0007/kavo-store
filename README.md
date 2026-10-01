# Kavo — Multipurpose Storefront (React)

Three complete eCommerce designs — **Fashion**, **Grocery** and **Furniture** — in one React app,
sharing a commerce layer. Front-end only: no backend, no payments, no persistence.

## Stack

| Concern | Choice |
| --- | --- |
| Build | Vite 8 |
| UI | React 19 |
| Routing | react-router-dom, one route tree mounted per storefront |
| State | React context for cart + wishlist |
| Styling | Tailwind CSS 3.4, palette driven by CSS custom properties |
| Icons | Hand-authored SVG set (`Icon.jsx`) — no icon font |
| Font | Jost, via Google Fonts |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## The three storefronts

| Store | Route | Accent | Layout character |
| --- | --- | --- | --- |
| Fashion | `/` | `#e53e3e` red | Coloured utility bar, dark nav strip, lifestyle hero, category rail, three promo tiles |
| Grocery | `/grocery` | `#67b02e` green | Pill controls, accent nav, three-column hero (aisle list + promo + offer card), circular category cards |
| Furniture | `/furniture` | `#885b3a` brown | Dark announcement bar, light nav, split hero on a circle motif, flat-sale banners with live countdown |

Each mounts the same inner pages: `shop`, `about`, `blog`, `contact`.

## How the theming works

A single attribute on the layout wrapper repaints everything:

```jsx
<div data-store="grocery">   // → --brand: 103 176 46
```

`src/index.css` declares `--brand`, `--brand-dark`, `--brand-soft`, `--bar` and `--bar-ink` per
`[data-store]` block. Tailwind consumes them as `rgb(var(--brand) / <alpha-value>)`, so
`bg-brand`, `text-brand` and `bg-brand/10` all work normally and opacity modifiers still compile.

The upshot: `ProductCard`, `CartDrawer`, `Footer` and the rest are written once and render red,
green or brown depending on which storefront mounted them.

The header goes further and *restructures* per store — grocery and furniture get pill-shaped
login/cart controls and a login button, fashion gets a phone block and a dark nav strip.

## Project layout

```
src/
  components/
    layout/   Header (3 arrangements), Footer, CartDrawer, StoreLayout, PageBanner, BackToTop
    home/     FashionHome, GroceryHome, FurnitureHome — the three distinct designs
    ui/       ProductCard, ProductGrid, CategoryRail, SectionHead, StoreSwitcher, Icon, Reveal
  context/    CartContext — cart, quantities, wishlist, currency formatting
  data/       stores.js — all three store configs in one file
  pages/      Home, Shop, About, Blog, Contact, 404
public/images/{fa,gr,fu}/  54 photographs, 1.8 MB
```

## Commerce behaviour

- **Cart** — add, increment, decrement (dropping below one removes the line rather than leaving a
  zero-qty row), remove, clear. Opens the drawer on add. Closes on `Escape`.
- **Shared across storefronts** — the cart is provider-level, so a fashion item and a grocery item
  can sit in the same basket. Switching store keeps the contents.
- **Wishlist** — toggles per product, badge in the header.
- **Sorting** on `/shop`, **tab filtering** on the product grids.
- **Countdown** on the furniture flat-sale banners ticks live from mount.
- `money()` formats to two decimals under $100 and drops them above, since grocery prices are
  single digits and furniture prices are four.

## Editing content

Everything lives in [`src/data/stores.js`](src/data/stores.js) — brand details, per-store
categories, products, promos and hero copy. Add a fourth vertical by appending a store object and
a `[data-store="…"]` block in `src/index.css`.

## The store switcher

Real deployments would put one vertical per domain. The switcher in the nav bar exists so all
three designs are reachable in a single build — remove `<StoreSwitcher />` from `Header.jsx` to
drop it.

## Images

54 photographs from [Unsplash](https://unsplash.com) under the Unsplash Licence — free for
commercial use, no attribution required — resized and stored locally, so the build has no external
image dependencies. The wordmark, favicon and the full icon set are drawn for this project.

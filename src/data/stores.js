// Public assets live under the deploy base (e.g. /kavo-store/ on GitHub Pages).
const BASE = import.meta.env.BASE_URL

export const brand = {
  name: 'Kavo',
  wordmark: 'KAVO',
  phone: '+1 (402) 763 2824',
  email: 'help@kavo.example',
  address: '18 Marlow Street, Bellhaven, OR 97204',
}

/** Shared across all three storefronts. */
export const mainNav = [
  { label: 'Home', to: '.' },
  { label: 'Shop', to: 'shop' },
  { label: 'About', to: 'about' },
  { label: 'Blog', to: 'blog' },
  { label: 'Contact', to: 'contact' },
]

export const utilityNav = ['About', 'My account', 'Wishlist', 'Checkout']

/* ------------------------------------------------------------------ FASHION */
const fashion = {
  key: 'fashion',
  label: 'Fashion',
  path: '/',
  tagline: 'Womenswear, menswear & accessories',
  announce: 'Free shipping on every order over $150',
  searchScopes: ['All Categories', 'Women Wear', 'Men Wear', 'Shoes', 'Bags', 'Watches'],
  hero: {
    eyebrow: 'Autumn 22 Collection',
    title: 'Super Collection\nFor Women',
    priceLabel: 'From',
    price: 320,
    cta: 'View Collections',
    image: `${BASE}images/fa/hero.jpg`,
  },
  categories: [
    { name: 'Women Wear', image: `${BASE}images/fa/cat-women.jpg`, count: 42 },
    { name: 'Shirts & Knits', image: `${BASE}images/fa/cat-shirts.jpg`, count: 28 },
    { name: 'Bag Collection', image: `${BASE}images/fa/cat-bags.jpg`, count: 19 },
    { name: 'Shoes', image: `${BASE}images/fa/cat-shoes.jpg`, count: 36 },
    { name: 'Watches', image: `${BASE}images/fa/cat-watches.jpg`, count: 14 },
    { name: 'Jewellery', image: `${BASE}images/fa/cat-jewellery.jpg`, count: 23 },
  ],
  promos: [
    { kicker: 'Special 40% off', title: 'The Latest Men’s\nTrends This Season', image: `${BASE}images/fa/promo-men.jpg` },
    { kicker: 'New in', title: 'Activewear Built\nFor Real Movement', image: `${BASE}images/fa/promo-active.jpg` },
    { kicker: 'In store now', title: 'Visit The Bellhaven\nFlagship Floor', image: `${BASE}images/fa/promo-store.jpg` },
  ],
  products: [
    { name: 'Cable Knit Poncho', cat: 'Women Wear', price: 128, was: 160, image: `${BASE}images/fa/p1.jpg`, badge: 'Sale' },
    { name: 'Structured Top Handle Bag', cat: 'Bags', price: 245, image: `${BASE}images/fa/p2.jpg` },
    { name: 'Court Runner Low', cat: 'Shoes', price: 96, was: 120, image: `${BASE}images/fa/p3.jpg`, badge: 'Sale' },
    { name: 'Velocity Trainer Red', cat: 'Shoes', price: 110, image: `${BASE}images/fa/p4.jpg`, badge: 'New' },
    { name: 'Suede Derby Tan', cat: 'Shoes', price: 155, image: `${BASE}images/fa/p5.jpg` },
    { name: 'Field Smartwatch 42mm', cat: 'Watches', price: 219, image: `${BASE}images/fa/p6.jpg` },
    { name: 'Loafer Green Calf', cat: 'Shoes', price: 175, image: `${BASE}images/fa/p7.jpg` },
    { name: 'Everyday Cotton Set', cat: 'Women Wear', price: 84, was: 99, image: `${BASE}images/fa/p8.jpg`, badge: 'Sale' },
  ],
}

/* ------------------------------------------------------------------ GROCERY */
const grocery = {
  key: 'grocery',
  label: 'Grocery',
  path: '/grocery',
  tagline: 'Fresh produce, pantry & everyday essentials',
  announce: 'Same-day delivery on orders placed before 2pm',
  searchScopes: ['All Categories', 'Fresh Fruit', 'Vegetables', 'Dairy', 'Bakery', 'Pantry'],
  sidebarCategories: [
    'Breakfast & Dairy', 'Meat & Fish', 'Fresh Fruit', 'Fresh Vegetables',
    'Dairy & Eggs', 'Milk & Cream', 'Bread & Bakery', 'Pantry Staples',
  ],
  hero: {
    eyebrow: 'Up to 30% off your first $150 order',
    title: 'Organic Grocery',
    price: 69,
    cta: 'Shop Now',
    image: `${BASE}images/gr/hero.jpg`,
  },
  sideCard: {
    badge: '−45% offer',
    title: 'With us, you will never\nmiss an ingredient',
    cta: 'Shop Now',
    image: `${BASE}images/gr/side.jpg`,
  },
  categories: [
    { name: 'Fresh Vegetables', image: `${BASE}images/gr/cat-veg.jpg`, count: 34 },
    { name: 'Fresh Fruit', image: `${BASE}images/gr/cat-fruit.jpg`, count: 28 },
    { name: 'Milk & Cream', image: `${BASE}images/gr/cat-dairy.jpg`, count: 16 },
    { name: 'Bread & Bakery', image: `${BASE}images/gr/cat-bakery.jpg`, count: 21 },
    { name: 'Deli & Ready', image: `${BASE}images/gr/cat-deli.jpg`, count: 12 },
    { name: 'Pet Supplies', image: `${BASE}images/gr/cat-pet.jpg`, count: 9 },
  ],
  promos: [
    { kicker: 'Weekend discount', title: 'Feed The Best\nEnergy Booster', sub: 'Do not miss the special offer this week', image: `${BASE}images/gr/promo-1.jpg` },
    { kicker: 'Weekend discount', title: 'Our Garden Fresh\nVegetables', sub: 'Do not miss the special offer this week', image: `${BASE}images/gr/promo-2.jpg` },
  ],
  products: [
    { name: 'Rainbow Grain Bowl', cat: 'Deli & Ready', price: 8.5, image: `${BASE}images/gr/p1.jpg`, badge: 'New' },
    { name: 'Atlantic Salmon Fillet', cat: 'Meat & Fish', price: 14.2, was: 17, image: `${BASE}images/gr/p2.jpg`, badge: 'Sale' },
    { name: 'Roasted Squash Soup', cat: 'Deli & Ready', price: 5.9, image: `${BASE}images/gr/p3.jpg` },
    { name: 'Citrus Garden Salad', cat: 'Fresh Vegetables', price: 6.4, image: `${BASE}images/gr/p4.jpg` },
    { name: 'Whole Milk 2L', cat: 'Milk & Cream', price: 3.1, image: `${BASE}images/gr/p5.jpg` },
    { name: 'Buttermilk Pancake Mix', cat: 'Bread & Bakery', price: 4.75, was: 6, image: `${BASE}images/gr/p6.jpg`, badge: 'Sale' },
    { name: 'Seasonal Veg Box', cat: 'Fresh Vegetables', price: 22, image: `${BASE}images/gr/p7.jpg`, badge: 'Best' },
    { name: 'Breakfast Fruit Crate', cat: 'Fresh Fruit', price: 18.5, image: `${BASE}images/gr/p8.jpg` },
  ],
}

/* ---------------------------------------------------------------- FURNITURE */
const furniture = {
  key: 'furniture',
  label: 'Furniture',
  path: '/furniture',
  tagline: 'Seating, storage & considered home pieces',
  announce: '20% off everything with a minimum spend — sale ends Sunday',
  searchScopes: ['All Categories', 'Sofas', 'Chairs', 'Beds', 'Desks', 'Storage'],
  hero: {
    eyebrow: 'Ready to ship',
    title: 'Home Decor',
    priceLabel: 'From',
    price: 299,
    cta: 'Explore Items',
    image: `${BASE}images/fu/hero.jpg`,
  },
  categories: [
    { name: 'Sofas', image: `${BASE}images/fu/cat-sofas.jpg`, count: 24 },
    { name: 'Chairs', image: `${BASE}images/fu/cat-chairs.jpg`, count: 38 },
    { name: 'Beds', image: `${BASE}images/fu/cat-beds.jpg`, count: 16 },
    { name: 'Desks', image: `${BASE}images/fu/cat-desks.jpg`, count: 12 },
    { name: 'Storage', image: `${BASE}images/fu/cat-storage.jpg`, count: 27 },
    { name: 'Decor', image: `${BASE}images/fu/cat-decor.jpg`, count: 45 },
  ],
  flatSales: [
    { kicker: 'Unique office desk', title: '30% Flat Sale', code: 'DESK30', image: `${BASE}images/fu/promo-1.jpg` },
    { kicker: 'Elegant comfort sofa', title: '10% Flat Sale', code: 'SEAT10', image: `${BASE}images/fu/promo-2.jpg` },
  ],
  banner: { title: 'Built To Last,\nPriced To Live With', cta: 'Shop The Range', image: `${BASE}images/fu/banner.jpg` },
  products: [
    { name: 'Linden Three Seater', cat: 'Sofas', price: 1240, was: 1490, image: `${BASE}images/fu/p1.jpg`, badge: 'Sale' },
    { name: 'Marlow Two Seater', cat: 'Sofas', price: 980, image: `${BASE}images/fu/p2.jpg` },
    { name: 'Ash Perch Stool', cat: 'Chairs', price: 145, image: `${BASE}images/fu/p3.jpg`, badge: 'New' },
    { name: 'Tufted Accent Chair', cat: 'Chairs', price: 620, image: `${BASE}images/fu/p4.jpg` },
    { name: 'Moulded Dining Chair', cat: 'Chairs', price: 210, was: 260, image: `${BASE}images/fu/p5.jpg`, badge: 'Sale' },
    { name: 'Saffron Lounge Chair', cat: 'Chairs', price: 540, image: `${BASE}images/fu/p6.jpg` },
    { name: 'Bramley Armchair', cat: 'Chairs', price: 495, image: `${BASE}images/fu/p7.jpg`, badge: 'Best' },
    { name: 'Wall Shelf System', cat: 'Storage', price: 320, image: `${BASE}images/fu/p8.jpg` },
  ],
}

export const stores = { fashion, grocery, furniture }
export const storeList = [fashion, grocery, furniture]

export const trustPoints = [
  { icon: 'truck', title: 'Free Delivery', text: 'On orders over $150, dispatched the same working day.' },
  { icon: 'returns', title: '30 Day Returns', text: 'Unused items go back for a full refund, no questions.' },
  { icon: 'shield', title: 'Secure Checkout', text: 'Card details are tokenised and never touch our servers.' },
  { icon: 'headset', title: 'Real Support', text: 'A person answers between 9 and 6, Monday to Saturday.' },
]

export const posts = [
  { slug: 'seasonal-edit', date: '14 Aug 2026', cat: 'Edit', title: 'How We Choose What Goes In The Seasonal Edit' },
  { slug: 'fabric-guide', date: '02 Aug 2026', cat: 'Guide', title: 'Reading A Fabric Label Without The Jargon' },
  { slug: 'delivery-notes', date: '21 Jul 2026', cat: 'Service', title: 'What Actually Happens After You Hit Checkout' },
]

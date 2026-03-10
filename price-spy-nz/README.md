# PriceSpy NZ - Price Comparison

Find the best deals across NZ stores. Compare prices from 1000+ retailers and always get the cheapest option.

## Features

- **Product Listings** - Browse products across categories (Phones, Computers, Audio, Home, Games, etc.)
- **Price Comparison** - See prices from multiple NZ retailers side-by-side
- **Best Price Highlight** - Cheapest option clearly marked
- **Search** - Find products by name, brand, or category
- **Category Navigation** - Filter by product type

## Tech Stack

- **Next.js 16** - App Router, React 19
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Utility-first styling
- **Custom Design System** - NZ-inspired dark theme with teal/fern accents

## Getting Started

```bash
# Install dependencies (already done)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home - product listings
│   ├── product/[id]/     # Product detail with price comparison
│   ├── category/[slug]/  # Category filtered listings
│   └── search/           # Search results
├── components/
│   ├── Header.tsx        # Search bar, logo
│   ├── CategoryNav.tsx   # Category navigation
│   ├── ProductCard.tsx   # Product listing card
│   └── PriceTable.tsx    # Retailer price comparison table
├── data/
│   └── products.ts       # Mock product data
└── types/
    └── product.ts        # TypeScript interfaces
```

## Data Integration

Currently uses mock data. To integrate with real PriceSpy NZ data:

1. **PriceSpy NZ** does not offer a public API - consider:
   - Web scraping (respect robots.txt, rate limits)
   - Contact PriceSpy for partnership/API access
   - Use third-party APIs like [PricesAPI](https://pricesapi.io) for NZ retailers

2. Update `src/data/products.ts` or create an API route to fetch live data
3. Add environment variables for API keys if needed

## Build & Deploy

```bash
npm run build
npm start
```

export interface PriceOffer {
  retailerId: string;
  retailerName: string;
  retailerLogo?: string;
  price: number;
  originalPrice?: number;
  url: string;
  inStock: boolean;
  lastUpdated: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  categoryId: string;
  image: string;
  description?: string;
  offers: PriceOffer[];
  lowestPrice: number;
  highestPrice: number;
  retailerCount: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  productCount: number;
  icon?: string;
}

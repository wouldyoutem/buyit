export interface Product {
  id: string;
  productName: string;
  category: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image: string;
  coupangLink: string;
  youtubeShorts?: string;
  youtubeChannel?: string;
  features: string[];
  rating?: number;
  reviewCount?: number;
  seoKeywords?: string;
  dateAdded?: string;
}

export interface ProductData {
  products: Product[];
}

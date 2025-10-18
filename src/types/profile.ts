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
  youtubeLink?: string;
  features: string[];
  rating?: number;
  reviewCount?: number;
}

export interface ProductData {
  products: Product[];
}

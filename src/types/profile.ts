export interface Product {
  id: string;
  productName: string;
  category: string;
  description: string;
  image: string;
  coupangLink: string;
  youtubeShorts?: string;
  features: string[];
  highlight?: string;
  dateAdded?: string;
}

export interface ProductData {
  products: Product[];
}

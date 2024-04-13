export interface Product {
  id: string;
  thumbnail: string;
  brand: string;
  title: string;
  price: number;
}

export interface ProductDetail extends Product {
  description: string;
  images: string[];
}

export interface ProductResponse {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

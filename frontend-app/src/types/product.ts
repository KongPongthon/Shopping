export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export interface CardProductTypes {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  price?: number;
  category?: string;
  size?: string;
  color?: {
    color: string;
    amount: number;
  }[];
  name?: string;
}

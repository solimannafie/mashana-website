
export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  new?: boolean;
  popular?: boolean;
}

export interface CartItemType extends ProductType {
  quantity: number;
}

export type CategoryType = 'all' | 'bread' | 'brioche' | 'focaccia' | 'desserts';

interface BaseProduct {
  id: number;
  title: string;
  price: number;
}

export interface Product extends BaseProduct {
  inStock: boolean;
}

export interface CartItem extends BaseProduct {
  qty: number
}

export interface CartState {
  items: Array<CartItem>;
}

export type CartAction =
  | { type: "add"; product: Product }
  | { type: "remove"; id: number }
  | { type: "clear"}

export const products: Array<Product> = Array.from({ length: 5000 }, (_, i) => ({
    id: i+1,
    title: `Товар ${i + 1}`,
    price: 100 + (i % 50) * 10,
    inStock: i % 3 !== 0,
}));

export interface Product {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
}

export const products: Array<Product> = Array.from({ length: 5000 }, (_, i) => ({
    id: i+1,
    title: `Товар ${i + 1}`,
    price: 100 + (i % 50) * 10,
    inStock: i % 3 !== 0,
}));

// Состояние корзины:
// { items: [{ id, title, price, inStock }] }

import { useState, useMemo, useReducer, useCallback } from "react";
import type { Product, CartItem, CartState, CartAction } from "./data";
import { products } from "./data";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar"
import Header from "./Header";

export default function App() {
  const [query, setQuery] = useState("");
  const [onlyInStock, setOnlyInStock] = useState(false);

  const visible = useMemo(() => {
    const q = query.trim().toLocaleLowerCase();
    return products.filter((p) => 
      p.title.toLowerCase().includes(q) && (!onlyInStock || p.inStock)
    );
  }, [query, onlyInStock])

  const initialCart: CartState = { items: [] };

  function cartReducer(state: CartState, action: CartAction): CartState {

    switch (action.type) {
      case "add":
        const exists = state.items.some((item) => item.id === action.product.id);
        if (exists) {
          return {
            items: state.items.map((item) =>
              item.id === action.product.id
                ? { ...item, qty: item.qty + 1 }
                : item
            ),
          };
        }

        return {
          items: [
            ...state.items, {
              id: action.product.id,
              title: action.product.title,
              price: action.product.price,
              qty: 1
            }
          ]
        };

      case "remove":
        return { items: state.items.filter((item) => item.id !== action.id) };

      case "clear":
        return initialCart;

      default:
        return state;
    }
  }

  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const onAddStable = useCallback(
    (product: Product) => dispatch({ type: "add", product: product }), []
  );

  const onRemoveStable = useCallback(
    (id: number) => dispatch({ type: "remove", id: id }), []
  );

  return (
    <>
      <Header
        count={cart.items.reduce((qty: number, item: CartItem) => qty + item.qty, 0)}
        price={cart.items.reduce((price: number, item: CartItem) => price + item.price * item.qty, 0)}
        onClear={() => dispatch({ type: "clear" })}
      /><br/>
      <SearchBar
        query={query}
        setQuery={setQuery}
        onlyInStock={onlyInStock}
        setOnlyInStock={setOnlyInStock}
      />
      <p>Найдено: {visible.length}</p>
      <ProductList 
        products={visible}
        cart={cart}
        onAdd={onAddStable}
        onRemove={onRemoveStable}
      />
    </>
  )
}

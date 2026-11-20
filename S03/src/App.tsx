import { useState, useMemo, useTransition } from "react";
import { products } from "./data";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar"
import Header from "./Header";
import useCart from "./useCart";

export default function App() {
  const [query, setQuery] = useState("");
  const [queryFilter, setQueryFilter] = useState("");

  const [inStock, setInStock] = useState(false);
  const [inStockFilter, setInStockFilter] = useState(false);

  const [isPending, startTransition] = useTransition();

  function handleSearch(value: string) {
    setQuery(value);
    startTransition(() => setQueryFilter(value));
  }

  function handleStock(value: boolean) {
    setInStock(value);
    startTransition(() => setInStockFilter(value));
  }

  const visible = useMemo(() => {
    const q = queryFilter.trim().toLocaleLowerCase();
    return products.filter((p) => 
      p.title.toLowerCase().includes(q) && (!inStockFilter || p.inStock)
    );
  }, [queryFilter, inStockFilter])

  const {items, totalCount, totalPrice, add, remove, clear} = useCart();

  return (
    <>
      <Header
        count={totalCount}
        price={totalPrice}
        onClear={clear}
      /><br/>
      <SearchBar
        query={query}
        handleSearch={handleSearch}
        onlyInStock={inStock}
        handleStock={handleStock}
      />
      <p>Найдено: {visible.length}</p>
      {isPending && <p>Загрузка..</p>}
      <ProductList 
          products={visible}
          items={items}
          onAdd={add}
          onRemove={remove}
        />
    </>
  )
}

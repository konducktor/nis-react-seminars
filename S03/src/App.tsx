import { useState, useMemo } from "react"
import { products } from "./data"
import ProductList from "./ProductList";
import SearchBar from "./SearchBar"

export default function App() {
  // хранит состояние страницы и собирает всё вместе
  const [query, setQuery] = useState("");
  const [onlyInStock, setOnlyInStock] = useState(false);

  const visible = useMemo(() => {
    const q = query.trim().toLocaleLowerCase();
    return products.filter((p) => 
      p.title.toLowerCase().includes(q) && (!onlyInStock || p.inStock)
    );
  }, [query, onlyInStock])

  return (
    <>
      <SearchBar
        query={query}
        setQuery={setQuery}
        onlyInStock={onlyInStock}
        setOnlyInStock={setOnlyInStock}
      />
      <p>Найдено: {visible.length}</p>
      <ProductList products={visible}/>
    </>
  )
}

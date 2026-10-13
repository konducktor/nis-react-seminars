import { useEffect, useRef } from "react";

interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  onlyInStock: boolean;
  setOnlyInStock: (value: boolean) => void;
}

export default function SearchBar({
    query,
    setQuery,
    onlyInStock,
    setOnlyInStock
}: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <>
            <input 
                type="id" 
                placeholder="Поиск по названию"
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <input 
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
            />
            <label>Только в наличии</label>
        </>
    )
}
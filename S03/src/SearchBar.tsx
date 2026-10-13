import { useEffect, useRef } from "react";

interface SearchBarProps {
  query: string;
  handleSearch: (value: string) => void;
  onlyInStock: boolean;
  handleStock: (value: boolean) => void;
}

export default function SearchBar({
    query,
    handleSearch,
    onlyInStock,
    handleStock
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
                onChange={(e) => handleSearch(e.target.value)}
            />
            <input 
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => handleStock(e.target.checked)}
            />
            <label>Только в наличии</label>
        </>
    )
}
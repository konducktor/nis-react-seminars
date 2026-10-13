import type { Product } from "./data"

export default function ProductCard({ 
    // id, 
    title, 
    price, 
    inStock 
}: Omit<Product, "id">) {
    return (
        <>
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{inStock ? "В наличии" : "Нет в наличии"}</p>
            <button>В корзину</button>
        </>
    )
}
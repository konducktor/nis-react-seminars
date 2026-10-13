import { memo } from "react";
import type { Product } from "./data"

interface ProductCardProps {
    product: Product
    cartCount: number
    onAdd: (product: Product) => void;
    onRemove: (id: number) => void;
}

function ProductCard({ 
    product,
    cartCount,
    onAdd,
    onRemove,
}: ProductCardProps) {
    return (
        <>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.inStock ? "В наличии" : "Нет в наличии"}</p>
            { cartCount === 0 ? (
                <button 
                    disabled={product.inStock === false}
                    onClick={() => onAdd(product)}
                >В корзину</button>
            ) : (
                <div>
                    <button onClick={() => onAdd(product)}>В корзине: {cartCount}</button>
                    <button onClick={() => onRemove(product.id)}>Убрать</button>
                </div>
            )
            }
        </>
    )
}

export default memo((props: ProductCardProps) => {
    console.log("render ProductCard")
    return ProductCard(props);
});
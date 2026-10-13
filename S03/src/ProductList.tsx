import type { CartItem, Product } from "./data"
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: Array<Product>
    items: Array<CartItem>,
    onAdd: (product: Product) => void;
    onRemove: (id: number) => void;
}

export default function ProductList({ 
    products,
    items,
    onAdd,
    onRemove
}: ProductListProps) {
    return (
        <>
        {
            products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    cartCount={items.find(item => item.id == product.id)?.qty ?? 0}
                    onAdd={onAdd}
                    onRemove={onRemove}
                />
            ))
        }
        </>
    )
}
import type { CartState, Product } from "./data"
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: Array<Product>
    cart: CartState,
    onAdd: (product: Product) => void;
    onRemove: (id: number) => void;
}

export default function ProductList({ 
    products,
    cart,
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
                    cartCount={cart.items.find(item => item.id == product.id)?.qty ?? 0}
                    onAdd={onAdd}
                    onRemove={onRemove}
                />
            ))
        }
        </>
    )
}
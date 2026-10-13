import type { Product } from "./data"
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: Array<Product>
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <>
        {
            products.map(product => (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    inStock={product.inStock}
                />
            ))
        }
        </>
    )
}
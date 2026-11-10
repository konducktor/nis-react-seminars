import './ProductCard.css';
import { formatPrice, type Product } from '../../../shared/products';

interface Props {
  product: Product;
  isActive?: boolean;
}

export function ProductCard({ product, isActive = false }: Props) {
  return (
    <article className={'card' + (isActive ? ' active' : '')}>
      <div style={{ fontSize: 32 }}>{product.emoji}</div>
      <h3 className="title">{product.title}</h3>
      <span className="price">{formatPrice(product.price)}</span>
    </article>
  );
}

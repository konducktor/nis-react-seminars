import clsx from 'clsx';
import styles from './ProductCard.module.css';
import { formatPrice, type Product } from '../../../shared/products';
import { stepButtonClasses } from '@mui/material';

interface Props {
  product: Product;
  isActive?: boolean;
}

export function ProductCard({ product, isActive = false }: Props) {
  return (
    <article className={clsx(styles.card, isActive && styles.active)}>
      <div style={{ fontSize: 32 }}>{product.emoji}</div>
      <h3 className="product title">{product.title}</h3>
      <span className="product price">{formatPrice(product.price)}</span>
    </article>
  );
}

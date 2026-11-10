import { PRODUCTS } from '../../../shared/products';
import { ProductCard } from './ProductCard';
import { UserCard } from './UserCard';

// БАГ: заголовки товаров стали красными и капсом, рамки — оранжевыми.
// TODO 1. Найдите в DevTools, какие правила применились к заголовку товара и почему победил UserCard.css.
// TODO 2. Переведите оба компонента на CSS Modules: *.module.css + import styles from '…'.
// TODO 3. Общие padding и border-radius вынесите в card-base.module.css и подключите через composes.
// TODO 4. Склейку строк 'card' + (isActive ? ' active' : '') замените на clsx; .active — отдельный класс.
// TODO 5. Найдите в DevTools сгенерированное имя класса и объясните его формат.
export default function Demo() {
  return (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      {PRODUCTS.map((p, i) => (
        <ProductCard key={p.id} product={p} isActive={i === 0} />
      ))}
      <UserCard name="Анна Иванова" />
    </div>
  );
}

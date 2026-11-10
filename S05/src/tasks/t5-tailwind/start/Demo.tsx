import './tailwind.css';
import { formatPrice, PRODUCTS } from '../../../shared/products';

// TODO 1. Сетка карточек: 1 колонка на мобильном, 2 от sm, 3 от lg (gap-4, отступы p-6).
// TODO 2. Карточка: фон, рамка, скругление rounded-card, тень, подъём при hover.
// TODO 3. Бейдж «Новинка» для product.isNew.
// TODO 4. Кнопка с вариантами primary | ghost: объект вариантов + функция cn() из ./cn.ts (уже готова).
//         Preflight в задании отключён — добавьте кнопке border-0 и font-[inherit].
// TODO 5. Тёмная тема: data-theme="dark" на обёртке и классы dark:… ; переключатель.
export default function Demo() {
  return (
    <div>
      <div>
        {PRODUCTS.map((p) => (
          <article key={p.id}>
            <div>{p.emoji}</div>
            <h3>{p.title}</h3>
            <span>{formatPrice(p.price)}</span>
            <button>В корзину</button>
          </article>
        ))}
      </div>
    </div>
  );
}

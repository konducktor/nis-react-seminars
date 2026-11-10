import styles from './Card.module.css';

// TODO 1. Создайте tokens.css: переменные --color-* в :root и переопределение в [data-theme='dark'].
// TODO 2. Замените все цвета в Card.module.css на var(--color-…).
// TODO 3. Хук useTheme(): начальное значение — из prefers-color-scheme,
//         при изменении ставит document.documentElement.dataset.theme.
// TODO 4. Кнопка переключает тему; добавьте плавный transition фона и цвета.
export default function Demo() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2>Тема на CSS-переменных</h2>
        <p className={styles.muted}>Сейчас кнопка ничего не делает.</p>
        <button className={styles.button}>Переключить тему</button>
      </div>
    </div>
  );
}

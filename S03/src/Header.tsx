interface HeaderProps {
    count: number,
    price: number,
    onClear: () => void
}

export default function Header({
    count, price, onClear
}: HeaderProps) {
    return (
        <>
        <h2>Магазин</h2>
        <p>Корзина: {count} шт.</p>
        <p>{price}р</p>
        <button onClick={onClear} disabled={count === 0}>Очистить</button>
        </>
    )
}
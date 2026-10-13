import { useCallback, useReducer } from "react";
import type { Product, CartState, CartAction, CartItem } from "./data"



const initialCart: CartState = { items: [] };

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case "add":
        const exists = state.items.some((item) => item.id === action.product.id);
        if (exists) {
            return {
            items: state.items.map((item) =>
                item.id === action.product.id
                ? { ...item, qty: item.qty + 1 }
                : item
            ),
            };
        }

        return {
            items: [
            ...state.items, {
                id: action.product.id,
                title: action.product.title,
                price: action.product.price,
                qty: 1
            }
            ]
        };

        case "remove":
        return { items: state.items.filter((item) => item.id !== action.id) };

        case "clear":
        return initialCart;

        default:
        return state;
    }
}

export default function useCart() {
    const [cart, dispatch] = useReducer(cartReducer, initialCart);

    const totalCount = cart.items.reduce((qty: number, item: CartItem) => qty + item.qty, 0);
    const totalPrice = cart.items.reduce((price: number, item: CartItem) => price + item.price * item.qty, 0);

    const add = useCallback(
        (product: Product) => dispatch({ type: "add", product: product }), []
    );

    const remove = useCallback(
        (id: number) => dispatch({ type: "remove", id: id }), []
    );

    const clear = useCallback(
        () => dispatch({ type: "clear" }), []
    );

    return { ...cart, totalCount, totalPrice, add, remove, clear };
}
// Задание 3. Платежи (20 минут)
//
// 1. Реализуйте describePayment: switch по метке kind.
// 2. Закройте switch проверкой полноты через never.
// 3. Реализуйте total — сумма только наличных платежей.
// 4. Добавьте четвёртый вариант оплаты и посмотрите, где компилятор
//    покажет незакрытые места.

export type Payment =
    | { kind: "card"; last4: string }
    | { kind: "cash"; amount: number }
    | { kind: "transfer"; iban: string }
    | { kind: "crypto", wallet: number };

function assertNever(value: never): never {
    throw new Error("Необработанный вариант: " + JSON.stringify(value));
}

export function describePayment(payment: Payment): string {
    switch (payment.kind) {
        case "card":
            return `По карте: ${payment.last4}`;
        case "cash":
            return `Наличные: ${payment.amount}`;
        case "transfer":
            return `Перевод: ${payment.iban}`;
        case "crypto":
            return `Криптовалютой: ${payment.wallet}`;
        default:
            assertNever(payment);
    }
}

export function total(payments: Payment[]): number {
    var out: number = 0;

    payments.forEach(payment => {
        if (payment.kind === "cash") out++;
    });

    return out;
}

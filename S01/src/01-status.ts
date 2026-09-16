// Задание 1. Статусы (15 минут)
//
// 1. Опишите Status как объединение литералов.
// 2. Реализуйте statusMessage через switch — по одному сообщению на вариант.
// 3. Закройте switch функцией assertNever, чтобы забытый вариант
//    становился ошибкой компиляции.
// 4. Добавьте в Status вариант "cancelled" и почините то, что сломается.

export type Status = "idle" | "loading" | "success" | "error" | "cancelled";

export function assertNever(value: never): never {
    throw new Error("Необработанный вариант: " + JSON.stringify(value));
}

export function statusMessage(status: Status): string {
    switch (status) {
        case "idle":
            return "Status: IDLE";
        case "loading":
            return "Status: LOADING";
        case "success":
            return "Status: SUCCESS";
        case "error":
            return "Status: ERROR";
        case "cancelled":
            return "Status: CANCELLED";
        default:
            assertNever(status);
    }
}

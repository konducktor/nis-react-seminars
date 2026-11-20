// Задание 4*. Правила валидации (со звёздочкой)
//
// 1. Опишите Rules так, чтобы ключом могло быть только поле формы (keyof).
// 2. Реализуйте validateForm: в результате только те поля,
//    которые не прошли проверку.
// 3. Сообщения собирайте шаблонной строкой.
//
// Подсказка: тип ошибок — { [K in keyof IFormData]?: string }.
// Отображённые типы (mapped types) — тема следующей лекции,
// поэтому задание необязательное.

export interface IFormData {
    username: string;
    email: string;
    age: number;
}

export type Rules = {
    [K in keyof IFormData]: (value: IFormData[K]) => boolean;
};

export type Errors = {
    [K in keyof IFormData]?: string;
};

export const defaultRules: Rules = {
    username: (value) => value.trim().length > 0,
    email: (value) => value.includes("@"),
    age: (value) => value > 0,
};

export function validateForm(data: IFormData, rules: Rules): Errors {
    var out: Errors = {};

    if (!rules.username(data.username)) out.username = "Ошибка в username";
    if (!rules.email(data.email)) out.email = "Ошибка в email";
    if (!rules.age(data.age)) out.age = "Ошибка в age";

    // P.S. Должен быть способ как-то проходиться по ключам,
    // но Object.keys не работает, он возвращает string[]. 
    // Преобразования тоже не нашёл

    return out;
}

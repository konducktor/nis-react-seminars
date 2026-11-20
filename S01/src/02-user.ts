// Задание 2. Карточка пользователя (15 минут)
//
// 1. Реализуйте describeUser.
// 2. Отсутствующий возраст не должен превращаться в "undefined лет".
// 3. Контакт различайте оператором in, а не проверкой на undefined.
// 4. Пустой массив хобби обработайте отдельной фразой.
//
// Без any, as и !.

export type Contact = { email: string } | { phone: string };

export type User = {
    name: string;
    age?: number;
    hobbies: string[];
    contact: Contact;
};

export function describeUser(user: User): string {
    var out: string = "User:\n";

    out += `\tName: ${user.name}\n`;
    if (user.age !== undefined) out += `\tAge: ${user.age}\n`;

    if (user.hobbies.length == 0) out += `\tNo hobbies\n`;
    else {
        out += `\tHobbies:\n`;
        user.hobbies.forEach(hobby => {
            out += `\t\t${hobby}\n`;
        });
    }

    if ("email" in user.contact) {
        out += `\tEmail: ${user.contact.email}`;
    } else if ("phone" in user.contact) {
        out += `\tPhone: ${user.contact.phone}`;
    }

    return out;
}

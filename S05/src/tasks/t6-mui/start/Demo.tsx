// TODO 1. createTheme: основной цвет #3b5bdb, borderRadius 10, шрифт system-ui,
//         светлая и тёмная схемы (colorSchemes).
// TODO 2. Через theme.components: у всех MuiButton — textTransform: 'none' и disableElevation.
// TODO 3. Собрать форму из Paper, Stack, TextField, Button, FormControlLabel + Checkbox.
// TODO 4. Отступы и ширину задать через проп sx, используя значения темы (p: 3, maxWidth: 420).
// TODO 5. Один кастомный компонент через styled() из '@mui/material/styles'.
// TODO 6. Переключатель светлой/тёмной схемы через useColorScheme().
export default function Demo() {
  return (
    <form style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h2>Регистрация</h2>
      <input placeholder="Имя" />
      <input placeholder="Email" type="email" />
      <label>
        <input type="checkbox" /> Получать новости
      </label>
      <button type="submit">Создать аккаунт</button>
    </form>
  );
}

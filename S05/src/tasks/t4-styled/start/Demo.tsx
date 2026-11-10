import { Button } from './Button';

// TODO 1. theme.ts: интерфейс AppTheme, объекты light и dark.
// TODO 2. styled.d.ts: расширьте DefaultTheme, чтобы props.theme был типизирован.
// TODO 3. Button на styled-components: варианты primary | outline | danger,
//         размеры sm | md через transient props ($variant, $size) и хелпер css.
// TODO 4. :hover, :focus-visible, :disabled.
// TODO 5. IconButton = styled(Button) — круглая кнопка 40×40.
// TODO 6. Кнопка-ссылка через проп as="a".
// TODO 7. createGlobalStyle для фона страницы + переключатель темы через ThemeProvider.
export default function Demo() {
  return (
    <div style={{ padding: 24, display: 'flex', gap: 12, fontFamily: 'system-ui, sans-serif' }}>
      <Button>Купить</Button>
      <Button variant="outline">Подробнее</Button>
    </div>
  );
}

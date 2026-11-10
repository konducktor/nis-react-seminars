import type { ButtonHTMLAttributes, CSSProperties } from 'react';

type Variant = 'primary' | 'outline';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

// Стили через объект style: нет :hover, :focus-visible, media-запросов,
// темы и переиспользования. Перепишите на styled-components.
export function Button({ variant = 'primary', ...rest }: Props) {
  const style: CSSProperties = {
    padding: '8px 16px',
    borderRadius: 8,
    border: '1px solid #3b5bdb',
    font: 'inherit',
    cursor: 'pointer',
    background: variant === 'primary' ? '#3b5bdb' : 'transparent',
    color: variant === 'primary' ? '#fff' : '#3b5bdb',
  };
  return <button style={style} {...rest} />;
}

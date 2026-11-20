import styled, { css } from 'styled-components'
import type { ButtonHTMLAttributes, CSSProperties } from 'react';

// type Variant = 'primary' | 'outline';

// interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: Variant;
// }

// // Стили через объект style: нет :hover, :focus-visible, media-запросов,
// // темы и переиспользования. Перепишите на styled-components.
// export function Button({ variant = 'primary', ...rest }: Props) {
//   const style: CSSProperties = {
//     padding: '8px 16px',
//     borderRadius: 8,
//     border: '1px solid #3b5bdb',
//     font: 'inherit',
//     cursor: 'pointer',
//     background: variant === 'primary' ? '#3b5bdb' : 'transparent',
//     color: variant === 'primary' ? '#fff' : '#3b5bdb',
//   };
//   return <button style={style} {...rest} />;
// }


export type Variant = 'primary' | 'outline' | 'danger';
export type Size = 'sm' | 'md';

interface ButtonProps {
  $variant?: Variant;
  $size?: Size;
}

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.onPrimary};
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
  outline: css`
    
  `,
  danger: css`
    
  `,
} satisfies Record<Variant, unknown>;

const sizes = {
  sm: css`
    padding: ${({ theme }) => `${theme.space(1)} ${theme.space(3)}`};
    font-size: 14px;
  `,
  md: css`
    
  `,
} satisfies Record<Size, unknown>;

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space(2)};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius};
  font: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: background 150ms ease;

  ${({ $variant = 'primary' }) => variants[$variant]}
  ${({ $size = 'md' }) => sizes[$size]}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
`;
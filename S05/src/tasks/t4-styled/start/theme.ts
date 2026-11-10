export interface AppTheme {
  name: "light" | "dark";
  colors: { 
    bg: string;
    surface: string;
    text: string;
    primary: string;
    primaryHover: string;
    onPrimary: string;
    danger: string;
    onDanger: string;
    focus: string;
  };
  radius: string;
  space: (n: number) => string;
}

const space = (n: number) => `${n * 4}px`;

export const light: AppTheme = {
  name: 'light',
  colors: {
    bg: '#f6f7f9',
    surface: '#ffffff',
    text: '#14161a',
    primary: '#3b5bdb',
    primaryHover: '#2f4ac0',
    onPrimary: '#ffffff',
    danger: '#d6336c',
    onDanger: '#ffffff',
    focus: '#74a0ff',
  },
  radius: '8px',
  space,
};

export const dark: AppTheme = {
  ...light,
  name: 'dark',
  colors: {
    bg: '#0f1115',
    surface: '#171a21',
    text: '#e8eaee',
    primary: '#7c94ff',
    primaryHover: '#94a8ff',
    onPrimary: '#0f1115',
    danger: '#f06595',
    onDanger: '#0f1115',
    focus: '#94a8ff',
  },
};
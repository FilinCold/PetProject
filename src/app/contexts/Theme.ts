import { createContext } from 'react';

export enum THEME {
  DARK = 'dark',
  LIGHT = 'light',
}

interface ContextType {
  theme: THEME;
  setTheme: (theme: THEME) => void;
}

export const ThemeContext = createContext<ContextType>({
  theme: THEME.LIGHT,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: (theme: THEME) => {},
});

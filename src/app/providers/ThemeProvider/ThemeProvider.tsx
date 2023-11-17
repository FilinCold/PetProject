import React, { ReactElement, useState } from 'react';
import { THEME, ThemeContext } from '../../contexts/Theme';
import { ThemeProviderProps } from './types';

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  const [theme, setTheme] = useState(THEME.LIGHT);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

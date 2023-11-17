import { THEME, ThemeContext } from '@src/app/contexts/Theme';
import { useContext } from 'react';

export const useTheme = () => {
  const { theme, setTheme: changeTheme } = useContext(ThemeContext);

  const setTheme = (theme: THEME) => {
    changeTheme(theme);
  };

  return {
    theme,
    setTheme,
  };
};

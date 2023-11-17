import React, { useState } from 'react';
import './globalStyles/global.scss';
import styles from './Application.module.scss';

import classNames from 'classnames';
import { ThemeProvider } from './providers/ThemeProvider';
import { useTheme } from '@src/shared/hooks/useTheme';
import { THEME } from './contexts/Theme';
import { withTranslation } from 'react-i18next';
import { Translation } from '@src/widgets/Translation';

const Application: React.FC = ({ t }: any) => {
  const { theme, setTheme } = useTheme();

  const wrapperClassName = classNames(styles.wrapper, `app-theme-${theme}`);

  const handleChangeTheme = () => {
    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT);
  };

  return (
    <div className={wrapperClassName}>
      <button onClick={handleChangeTheme}>Theme</button>
      <h1>{t('Welcome to React')}</h1>
      <Translation />
      {/* <Header />
      <SideBar />
      <Main />
      <Footer /> */}
    </div>
  );
};

export default withTranslation()(Application);

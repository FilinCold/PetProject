import { Language } from '@src/features/TranslationLogic/types';
import React from 'react';
import styles from './TranslationButtons.module.scss';
import { TranslationButtonsProps } from './types';

export const TranslationButtons = (props: TranslationButtonsProps) => {
  const { handleChangeLanguage } = props;

  return (
    <div className={styles.containerTranslation}>
      <button onClick={handleChangeLanguage(Language.EN)}>EN</button>
      <button onClick={handleChangeLanguage(Language.RU)}>RU</button>
    </div>
  );
};

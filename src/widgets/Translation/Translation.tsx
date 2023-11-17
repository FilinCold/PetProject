import React from 'react';
import { TranslationButtons } from '@src/entities/TranslationButtons';
import { Language } from '@src/features/TranslationLogic/types';
import { changeLanguage } from '@src/features/TranslationLogic/utils';

export const Translation = () => {
  const handleChangeLanguage = (language: Language) => () => {
    changeLanguage(language);
  };
  return <TranslationButtons handleChangeLanguage={handleChangeLanguage} />;
};

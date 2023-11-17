import i18n from '@src/i18n';
import { Language } from './types';

export const changeLanguage = (language: Language) => {
  if (i18n.language !== language) {
    i18n.changeLanguage(language);
  }
};

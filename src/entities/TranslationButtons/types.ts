import { Language } from '@src/features/TranslationLogic/types';

export interface TranslationButtonsProps {
  handleChangeLanguage: (language: Language) => () => void;
}

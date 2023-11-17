import { LayoutSettings, PageNames } from './types';

export const getLayoutSettings = new Map<PageNames, LayoutSettings>([
  [
    PageNames.PROFILE,
    {
      isSideBar: false,
    },
  ],
]);

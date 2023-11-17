import { ListMode, ListModeKeys } from './types';

export const listPickerMode: ListMode[] = [
  {
    id: 0,
    name: ListModeKeys.TODAY,
  },
  {
    id: 1,
    name: ListModeKeys.WEEK,
  },
  {
    id: 2,
    name: ListModeKeys.MONTH,
  },
  {
    id: 3,
    name: ListModeKeys.YEAR,
  },
  {
    id: 4,
    name: ListModeKeys.RANGE_PERIOD,
  },
];

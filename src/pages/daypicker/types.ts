export enum ListModeKeys {
  TODAY = 'Сегодня',
  WEEK = 'Неделя',
  MONTH = 'Месяц',
  YEAR = 'Год',
  RANGE_PERIOD = 'Свой период',
}

export interface ListMode {
  name: ListModeKeys;
  id: number;
}

export enum PickerMode {
  SINGLE = 'single',
  RANGE = 'range',
}

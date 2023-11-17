import { DateRange } from 'react-day-picker';
import { ListModeKeys } from './types';
import { addDays, addYears, lastDayOfMonth, startOfMonth } from 'date-fns';

export const getSelectedDays = (
  modePicker: ListModeKeys,
  setRange: (selectedDay: DateRange) => void,
) => {
  const currentDate = new Date();
  const selectedDay: DateRange = {
    from: currentDate,
  };
  const firstDayInMonth = startOfMonth(currentDate);

  switch (modePicker) {
    case ListModeKeys.TODAY: {
      setRange(selectedDay);
      break;
    }

    case ListModeKeys.WEEK: {
      selectedDay.to = addDays(currentDate, 7);
      setRange(selectedDay);
      break;
    }

    case ListModeKeys.MONTH: {
      selectedDay.from = firstDayInMonth;
      selectedDay.to = addDays(
        firstDayInMonth,
        lastDayOfMonth(currentDate).getDate(),
      );
      setRange(selectedDay);
      break;
    }

    case ListModeKeys.YEAR: {
      selectedDay.from = firstDayInMonth;
      selectedDay.to = addYears(firstDayInMonth, 1);
      setRange(selectedDay);

      break;
    }

    case ListModeKeys.RANGE_PERIOD: {
      setRange(selectedDay);
      break;
    }

    default:
      break;
  }
};

import { useEffect, useState } from 'react';
import { DateRange, DayPicker as Picker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './DayPicker.scss';
import { listPickerMode } from './constants';
import cx from 'classnames';
import { ListModeKeys, PickerMode } from './types';
import { lastDayOfMonth, startOfMonth } from 'date-fns';
import { getSelectedDays } from './helpers';

export const DayPicker = () => {
  const currentDate = new Date();
  const defaultSelected: DateRange = {
    from: currentDate,
  };
  const [range, setRange] = useState<DateRange>(defaultSelected);
  const [modePicker, setModePicker] = useState(ListModeKeys.TODAY);

  const handleChangeModePicker = (name: ListModeKeys) => {
    setModePicker(name);
  };

  console.log(startOfMonth(currentDate));

  useEffect(() => {
    getSelectedDays(modePicker, setRange);
  }, [modePicker]);

  const settingPickerSingleOrRange =
    modePicker === ListModeKeys.TODAY ? PickerMode.SINGLE : PickerMode.RANGE;

  return (
    <div className='container'>
      <div className='containerDateInput'>
        <div className='dateLabel'>
          <span>Дата</span>
        </div>
        <div className='dateInput'>
          <div>
            <input type='text' />
          </div>
          <div>
            <input type='text' />
          </div>
        </div>
      </div>

      <div className='containerListModePicker'>
        <div className='listMode'>
          {listPickerMode.map((item) => {
            const classNameActive = cx({
              ['active']: modePicker === item.name,
            });
            return (
              <div key={item.id} className='listItem'>
                <button
                  className={classNameActive}
                  onClick={() => handleChangeModePicker(item.name)}
                >
                  {item.name}
                </button>
              </div>
            );
          })}
        </div>
        <div>
          {/* выключил типизацию, потому что Picker требует типизировать 
          состояние даты в зависимости от режима самого Picker */}
          {/* @ts-ignore */}
          <Picker
            mode={settingPickerSingleOrRange}
            selected={range}
            onSelect={setRange}
            showOutsideDays
            className='disableHead'
          />
        </div>
      </div>
    </div>
  );
};

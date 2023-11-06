import React from 'react';
import './Application.scss';
import { withProvider } from './HOC/withProvider';
import { DayPicker } from '@src/pages/daypicker';

const Application: React.FC = () => {
  return (
    <div>
      <DayPicker />
    </div>
  );
};

export default withProvider(Application);

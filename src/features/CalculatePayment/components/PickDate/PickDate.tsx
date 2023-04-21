import React from 'react';
import { useDate } from '../../hooks/useDate';
import { DateRange } from '../../../../libs/types';

export const PickDate = ({ maximumDate, difference }: DateRange) => {
  const dates = useDate({ maximumDate, difference });
  return (
    <select>
      {dates.map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </select>
  );
};

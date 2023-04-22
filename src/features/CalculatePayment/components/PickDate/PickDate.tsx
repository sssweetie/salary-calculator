import React from 'react';
import { useDate } from '../../hooks/useDate';
import { DateRange } from '../../../../libs/types';
import * as S from './styled';

export const PickDate = ({ maximumDate, difference }: DateRange) => {
  const dates = useDate({ maximumDate, difference });
  return (
    <S.Selector>
      {dates.map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </S.Selector>
  );
};

import React from 'react';
import { useDate } from '../../hooks/useDate';
import * as S from './styled';
import { DateRange } from '../../../../libs/types/features/CalculatePayment';

export const PickDate = ({
  maximumDate,
  difference,
  register,
  fieldName,
}: DateRange) => {
  const dates = useDate({ maximumDate, difference });

  return (
    <S.Selector {...register(fieldName)}>
      {dates.map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </S.Selector>
  );
};

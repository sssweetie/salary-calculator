import React from 'react';
import { useDate } from '../../hooks/useDate';
import * as S from './styled';
import { DateRange } from '../../../../libs/types/features/CalculatePayment';

export const PickDate = ({
  maximumDate,
  difference,
  register,
  fieldName,
  inputName,
}: DateRange) => {
  const dates = useDate({ maximumDate, difference });

  return (
    <S.InputFieldWrapper>
      <label>{inputName}</label>
      <S.Selector size="5" {...register(fieldName)}>
        {dates.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </S.Selector>
    </S.InputFieldWrapper>
  );
};

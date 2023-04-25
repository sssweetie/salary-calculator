import React from 'react';
import * as S from './styled';
import { DateRange } from '../../types';

export const PickMonth = ({ register, fieldName, label, error }: DateRange) => {
  return (
    <S.InputFieldWrapper>
      <label>{label}</label>
      <input
        type="month"
        {...register(fieldName, { required: 'You must choose month' })}
      />
    </S.InputFieldWrapper>
  );
};

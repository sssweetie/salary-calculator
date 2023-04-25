import React from 'react';
import * as S from './styled';
import { FormProps } from '../../types';

export const Salary = ({ register, fieldName, error }: FormProps) => {
  return (
    <S.InputFieldWrapper>
      <label>Month salary</label>
      <S.PaymentInput
        type="number"
        $error={error}
        {...register(fieldName, {
          required: 'You must input month payment',
          min: 0,
        })}
      />
    </S.InputFieldWrapper>
  );
};

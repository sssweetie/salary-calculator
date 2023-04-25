import React, { useState } from 'react';
import * as S from './styled';
import { FormProps } from '../../types';

interface Props extends FormProps {
  error: boolean;
}

export const Payment = ({ register, fieldName, error }: Props) => {

  return (
    <S.InputFieldWrapper>
      <label>Input payment (for month)</label>
      <S.PaymentInput
        type="number"
        $error={error}
        {...register(fieldName, { required: 'You must input month payment' })}
      />
    </S.InputFieldWrapper>
  );
};

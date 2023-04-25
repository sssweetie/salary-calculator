import React, { useState } from 'react';
import * as S from './styled';
import { FormProps } from '../../types';

interface Props extends FormProps {
  error: boolean;
  initialPayment: string;
}

export const Payment = ({
  register,
  fieldName,
  error,
  initialPayment,
}: Props) => {
  const onlyNumbers = new RegExp(/^\d+$/);

  const [payment, setPayment] = useState(initialPayment);

  const inputHandler = (value: string) => {
    if (onlyNumbers.test(value) || value === '') {
      setPayment(value);
    }
  };

  return (
    <S.InputFieldWrapper>
      <label>Input payment (for month)</label>
      <S.PaymentInput
        $error={error}
        {...register(fieldName, { required: 'You must input month payment' })}
        value={payment}
        onChange={(e) => inputHandler(e.target.value)}
      />
    </S.InputFieldWrapper>
  );
};

import React, { useState } from 'react';
import * as S from './styled';

export const Payment = ({ register, fieldName, error }: any) => {
  const onlyNumbers = new RegExp(/^\d+$/);
  const [value, setValue] = useState('');
  const inputHandler = (value: any) => {
    if (onlyNumbers.test(value) || value === '') {
      setValue(value);
    }
  };

  return (
    <S.PaymentInput
      $error={error}
      {...register(fieldName, { required: 'You must input month payment' })}
      value={value}
      onChange={(e) => inputHandler(e.target.value)}
    ></S.PaymentInput>
  );
};

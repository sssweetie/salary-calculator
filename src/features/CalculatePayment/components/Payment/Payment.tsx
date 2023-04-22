import React, { useState } from 'react';
import * as S from './styled';

export const Payment = () => {
  const onlyNumbers = new RegExp(/^\d+$/);
  const [value, setValue] = useState('');
  const inputHandler = (value: any) => {
    if (onlyNumbers.test(value) || value === '') {
      setValue(value);
    }
  };

  return (
    <S.PaymentInput
      value={value}
      onChange={(e) => inputHandler(e.target.value)}
    ></S.PaymentInput>
  );
};

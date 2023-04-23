import React, { useState } from 'react';
import * as S from './styled';

export const WorkingHours = ({ register, fieldName }: any) => {
  const [hours, setHours] = useState(8);
  const onlyNumbers = new RegExp(/^\d+$/);
  const inputHandler = (value: any) => {
    if ((onlyNumbers.test(value) && value > 0 && value <= 24) || value === '') {
      setHours(value);
    }
  };

  return (
    <S.WorkingHoursInput
      {...register(fieldName)}
      min={0}
      max={24}
      value={hours}
      onChange={(e) => inputHandler(e.target.value)}
    />
  );
};

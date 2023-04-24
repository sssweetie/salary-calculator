import React, { useState } from 'react';
import * as S from './styled';
import { FormProps } from '../../../../libs/types/features/CalculatePayment';

interface Props extends FormProps {
  initialHours: number;
}

export const WorkingHours = ({ register, fieldName, initialHours }: Props) => {
  const [hours, setHours] = useState(initialHours);
  const onlyNumbers = new RegExp(/^\d+$/);

  const GetHours = (value: any) => { //str and num
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
      onChange={(e) => GetHours(e.target.value)}
    />
  );
};

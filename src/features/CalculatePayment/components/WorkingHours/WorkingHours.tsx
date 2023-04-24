import React, { useState } from 'react';
import * as S from './styled';
import { FormProps } from '../../../../libs/types/features/CalculatePayment';

interface Props extends FormProps {
  initialHours: number;
  error: boolean;
}

export const WorkingHours = ({
  register,
  fieldName,
  initialHours,
  error,
}: Props) => {
  const [hours, setHours] = useState(initialHours);
  const onlyNumbers = new RegExp(/^\d+$/);

  const GetHours = (value: any) => {
    if ((onlyNumbers.test(value) && value > 0 && value <= 24) || value === '') {
      setHours(value);
    }
  };

  return (
    <S.InputFieldWrapper>
      <label>Input hours (1-24)</label>
      <S.WorkingHoursInput
        {...register(fieldName, { required: 'You must input numbers' })}
        $error={error}
        min={0}
        max={24}
        value={hours}
        onChange={(e) => GetHours(e.target.value)}
      />
    </S.InputFieldWrapper>
  );
};

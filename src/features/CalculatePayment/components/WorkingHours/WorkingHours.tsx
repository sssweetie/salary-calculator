import React from 'react';
import * as S from './styled';
import { FormProps } from '../../types';

export const WorkingHours = ({ register, fieldName, error }: FormProps) => {
  return (
    <S.InputFieldWrapper>
      <label>Hours per day</label>
      <S.WorkingHoursInput
        {...register(fieldName, {
          required: 'You must input numbers',
          min: 1,
          max: 24,
        })}
        type="number"
        $error={error}
      />
    </S.InputFieldWrapper>
  );
};

import React, { useState } from 'react';
import * as S from './styled';
import { FormProps } from '../../types';

interface Props extends FormProps {
  error: boolean;
}

export const WorkingHours = ({ register, fieldName, error }: Props) => {
  return (
    <S.InputFieldWrapper>
      <label>Input hours (1-24)</label>
      <S.WorkingHoursInput
        {...register(fieldName, { required: 'You must input numbers' })}
        type="number"
        $error={error}
        min={1}
        max={24}
      />
    </S.InputFieldWrapper>
  );
};

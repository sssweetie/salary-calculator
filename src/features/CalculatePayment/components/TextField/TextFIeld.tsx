import React from 'react';
import * as S from './styled';
import { Controller } from 'react-hook-form';

type Props = {
  label: string;
  type: string;
  name: string;
  control: any;
  max?: number;
};

export const TextField = ({ label, type, control, name, max }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: true, min: 1, max }}
      render={({ fieldState: { error }, field }) => (
        <S.InputFieldWrapper>
          <label>{label}</label>
          <S.Input $error={Boolean(error)} type={type} {...field} />
        </S.InputFieldWrapper>
      )}
    />
  );
};

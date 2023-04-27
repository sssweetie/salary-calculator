import React from 'react';
import * as S from './styled';
import { Controller, Control } from 'react-hook-form';

type Props = {
  label: string;
  type: string;
  name: string;
  control: Control<any>;
  required: boolean;
  disabled: boolean;
  min?: number;
  max?: number;
};

export const TextField: React.FC<Props> = ({
  label,
  type,
  control,
  required,
  disabled,
  name,
  min,
  max,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required, min, max }}
      render={({ fieldState: { error }, field }) => (
        <S.Wrapper>
          <S.Label>{label}</S.Label>
          <S.Input
            disabled={disabled}
            $error={Boolean(error)}
            type={type}
            {...field}
          />
        </S.Wrapper>
      )}
    />
  );
};

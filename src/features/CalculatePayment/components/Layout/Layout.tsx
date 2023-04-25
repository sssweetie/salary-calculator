import React, { ReactNode } from 'react';
import * as S from './styled';
import { Date } from '../../types';

interface Props {
  payment: ReactNode;
  workingHours: ReactNode;
  pickMonth: ReactNode;
  pickYear: ReactNode;
  onSubmit: any;
  errors: any;
  formState: Date;
}

export const Layout = ({
  payment,
  workingHours,
  pickMonth,
  pickYear,
  onSubmit,
  errors,
  formState,
}: Props) => {
  return (
    <S.Wrapper onSubmit={onSubmit}>
      {payment}
      {errors.payment && <S.Error>{errors.payment?.message}</S.Error>}
      {workingHours}
      {errors.hours && <S.Error>{errors.hours?.message}</S.Error>}
      <S.DataPicker>
        {pickMonth}
        {pickYear}
      </S.DataPicker>
      <S.SubmitButton>Submit</S.SubmitButton>
      <S.Output>
        {formState.payment &&
          formState.workingDays &&
          `Number of working days: ${formState.workingDays}. 1 hour of work is estimated at ${formState.payment}. `}
      </S.Output>
    </S.Wrapper>
  );
};

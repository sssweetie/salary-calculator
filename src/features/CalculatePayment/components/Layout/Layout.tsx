import React, { ReactNode } from 'react';
import * as S from './styled';
import { Date } from '../../types';

interface Props {
  payment: ReactNode;
  workingHours: ReactNode;
  pickMonth: ReactNode;
  pickYear: ReactNode;
  onSubmit: any;
  salary: number;
  workingDays: number;
}

export const Layout = ({
  payment,
  workingHours,
  pickMonth,
  pickYear,
  onSubmit,
  salary,
  workingDays,
}: Props) => {
  return (
    <S.Wrapper onSubmit={onSubmit}>
      {payment}
      {workingHours}
      <S.DataPicker>
        {pickMonth}
        {pickYear}
      </S.DataPicker>
      <S.SubmitButton>Submit</S.SubmitButton>
      <S.Output>
        {salary &&
          workingDays &&
          `Number of working days: ${workingDays}. 1 hour of work is estimated at ${salary}. `}
      </S.Output>
    </S.Wrapper>
  );
};

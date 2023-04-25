import React, { ReactNode } from 'react';
import * as S from './styled';

interface Props {
  salary: ReactNode;
  workingHours: ReactNode;
  pickMonth: ReactNode;
  onSubmit: any;
  hourSalary: number;
  workingDays: number;
}

export const Layout = ({
  salary,
  workingHours,
  pickMonth,
  onSubmit,
  hourSalary,
  workingDays,
}: Props) => {
  return (
    <S.Wrapper onSubmit={onSubmit}>
      {salary}
      {workingHours}
      {pickMonth}
      <S.SubmitButton>Submit</S.SubmitButton>
      <S.Output>
        {hourSalary &&
          workingDays &&
          `Number of working days: ${workingDays}. 1 hour of work is estimated at ${hourSalary}. `}
      </S.Output>
    </S.Wrapper>
  );
};

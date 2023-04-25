import React from 'react';
import * as S from './styled';

type Props = {
  hourSalary: number;
  workingDays: number;
};

export const Output = ({ hourSalary, workingDays }: Props) => {
  if (workingDays > 0)
    return (
      <S.Wrapper>
        <S.Output>Number of working days: {workingDays}.</S.Output>
        <S.Output>1 hour of work is estimated at {hourSalary}.</S.Output>
      </S.Wrapper>
    );
  return null;
};

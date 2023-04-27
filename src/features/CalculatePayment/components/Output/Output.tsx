import React from 'react';
import * as S from './styled';

type Props = {
  hourSalary: number;
  workingDays: number;
};

export const Output: React.FC<Props> = ({ hourSalary, workingDays }) => {
  if (workingDays > 0) {
    return (
      <S.Wrapper>
        <S.Output>
          <b>Number of working days:</b> {workingDays}
        </S.Output>
        <S.Output>
          <b>Salary per hour:</b> {hourSalary.toFixed(1)}
        </S.Output>
      </S.Wrapper>
    );
  }
  
  return null;
};

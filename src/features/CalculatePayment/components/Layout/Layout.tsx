import React, { ReactNode } from 'react';
import * as S from './styled';

interface Props {
  form: ReactNode;
  output: ReactNode;
}

export const Layout = ({ form, output }: Props) => {
  return (
    <S.Wrapper>
      {form}
      <hr></hr>
      {output}
    </S.Wrapper>
  );
};

import React, { ReactNode } from 'react';
import * as S from './styled';

interface Props {
  form: ReactNode;
  output: ReactNode;
}

export const Layout: React.FC<Props> = ({ form, output }) => {
  return (
    <S.Wrapper>
      {form}
      {output}
    </S.Wrapper>
  );
};

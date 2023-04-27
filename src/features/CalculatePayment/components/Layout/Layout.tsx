import React, { ReactNode } from 'react';
import * as S from './styled';

interface Props {
  form: ReactNode;
  output: ReactNode;
  serverError: ReactNode;
}

export const Layout: React.FC<Props> = ({ form, output, serverError }) => {
  return (
    <S.Wrapper>
      {form}
      {output}
      {serverError}
    </S.Wrapper>
  );
};

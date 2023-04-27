import React, { ReactNode } from 'react';
import * as S from './styled';

type Props = {
  children: ReactNode;
};

export const Error: React.FC<Props> = ({ children }) => {
  return <S.ErrorMessage>{children}</S.ErrorMessage>;
};

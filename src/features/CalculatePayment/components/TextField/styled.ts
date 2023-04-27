import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<{ $error: boolean }>`
  ${({ $error }) =>
    $error
      ? css`
          border: 1px solid red;
          outline: 1px solid red;
        `
      : css`
          border: 1px solid #9a9a9a;
        `}

  &:focus {
    ${({ $error }) =>
      !$error &&
      css`
        border: 1px solid #2f80ed;
        outline: 1px solid #2f80ed;
      `}
  }

  padding: 0 8px;
  border-radius: 8px;
  height: 40px;
  flex-grow: 1;
  margin-top: 12px;
`;

export const Label = styled.label`
  color: rgb(72 72 72);
`;

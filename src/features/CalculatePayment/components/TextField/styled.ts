import styled from 'styled-components';

export const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const Input = styled.input<{ $error: boolean }>`
  border: ${(props) => props.$error && '1px solid red'};
  outline: ${(props) => props.$error && '1px solid red'};
  &:focus {
    outline: ${(props) =>
      props.$error ? '1px solid red' : '1px solid #2f80ed'};
    border: ${(props) =>
      props.$error ? '1px solid red' : '1px solid #2f80ed'};
  }

  padding: 0 8px;
  border: 1px solid #9a9a9a;
  border-radius: 8px;
  height: 40px;
  flex-grow: 1;
  margin-top: 12px;
`;

export const Error = styled.p`
  margin-top: 12px;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  border-radius: 8px;
  color: #d32f2f;
  background-color: #ffe8e8;
`;

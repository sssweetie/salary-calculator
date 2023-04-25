import styled from 'styled-components';

export const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 10px;
`;

export const Input = styled.input<{ $error: boolean }>`
  border: ${(props) => props.$error && '1px solid red'};
  outline: ${(props) => props.$error && '1px solid red'};

  height: 40px;
  width: 90%;
`;

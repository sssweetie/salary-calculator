import styled from 'styled-components';

export const PaymentInput = styled.input<{ $error: boolean }>`
  border: ${(props) => (props.$error ? '1px solid red' : '1px solid black')};
  outline: ${(props) => (props.$error ? '1px solid red' : '1px solid black')};
  height: 40px;
  width: 90%;
`;

import styled from 'styled-components';

export const PaymentInput = styled.input<{ $error: boolean }>`
  border: ${(props) => props.$error && '1px solid red'};
  outline: ${(props) => props.$error && '1px solid red'};

  height: 40px;
  width: 90%;
`;

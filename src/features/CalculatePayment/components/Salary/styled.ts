import styled from 'styled-components';

export const PaymentInput = styled.input<{ $error: boolean }>`
  border: ${(props) => props.$error && '1px solid red'};
  outline: ${(props) => props.$error && '1px solid red'};

  height: 40px;
  width: 90%;
`;

export const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin-top: 10px;
`;

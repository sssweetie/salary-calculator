import styled from 'styled-components';

export const FormName = styled.h3`
  grid-area: header;
  margin: 0;
  font-size: 20px;
`;

export const Form = styled.form`
  display: grid;
  grid-template-areas:
    'header header header'
    'input1 input2 input3'
    'button button button';
  grid-column-gap: 12px;
  grid-row-gap: 24px;
  grid-template-columns: repeat(3, 150px);
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })<{
  disabled: boolean;
}>`
  background-color: #2f80ed;
  color: #ffffff;
  height: 40px;
  border: 0;
  grid-area: button;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  opacity: 1;
  cursor: pointer;
  transition: all 0.5s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &:active:not(:disabled) {
    opacity: 0.8;
  }
`;

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
  margin-top: 24px;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  }
  &:active {
    opacity: ${(props) => !props.disabled && '80%'};
  }
  opacity: ${(props) => (props.disabled ? '50%' : '100%')};
`;

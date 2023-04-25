import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px 20px 20px;
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })<{
  disabled: boolean;
}>`
  background-color: #0075ff;
  color: #ffffff;
  height: 40px;
  width: 200px;
  border: 0;
  margin-top: 20px;
  &:hover {
    cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  }
  &:active {
    opacity: ${(props) => !props.disabled && '80%'};
  }
  opacity: ${(props) => (props.disabled ? '50%' : '100%')};
`;

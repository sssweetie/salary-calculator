import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px 20px 20px;
  position: absolute;
  min-width: 400px;
  min-height: 300px;
  position: absolute;
  border: 1px solid black;
  border-radius: 10px;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const DataPicker = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  background-color: aliceblue;
  height: 40px;
  width: 200px;
  border: 0;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 75%;
  }
`;

export const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin-top: 10px;
`;

export const Output = styled.div`
  margin-top: 20px;
`;

export const Error = styled.label`
  color: red;
  font-size: 10px;
`;

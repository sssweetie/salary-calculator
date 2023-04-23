import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: absolute;
  min-width: 400px;
  height: 300px;
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
  width: 368px;
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  border: 1px solid black;
  background-color: aliceblue;
  height: 40px;
  width: 200px;
  margin-top: 40px;
`;

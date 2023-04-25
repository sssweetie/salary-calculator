import styled from 'styled-components';
export const Wrapper = styled.div`
  min-width: 400px;
  min-height: 300px;
  position: absolute;
  border: 1px solid black;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Error = styled.label`
  color: red;
  font-size: 10px;
`;

export const DataPicker = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;

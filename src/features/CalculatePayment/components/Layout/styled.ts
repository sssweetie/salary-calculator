import styled from 'styled-components';
export const Wrapper = styled.div`
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #efefef;
  border-radius: 8px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.1);
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

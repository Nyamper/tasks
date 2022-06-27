import styled from 'styled-components';

export const StyledButton = styled.button`
  border: 1px solid black;
  background-color: white;
  color: black;
  padding: 10px 30px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
  &:disabled {
    background: #fff;
    color: #ccc;
    cursor: no-drop;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`;
export const StyledError = styled.div`
  color: red;
  padding-bottom: 10px;
`;

export const StyledForm = styled.form`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 300px;
`;

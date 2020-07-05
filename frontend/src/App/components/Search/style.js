import styled from "styled-components";

export const WrapperSearch = styled.div`
  width: 100%;
  color: #585858;
  padding: 8px;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #c7c6ad;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;

  ::placeholder {
    color: #585858;
    opacity: none;
    margin-right: 10px;
  }
`;

import styled from "styled-components";

export const QuizzWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const NumberPage = styled.p`
  align-self: flex-end;
`;

export const ButtonQuizz = styled.button`
  border: none;
  background: ${({ theme }) => theme.lightGray};
  width: 120px;
  padding: 10px 0;
  border-radius: 25px;
  border: none;

  + button {
    margin-top: 8px;
  }
`;

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
  padding: 8px 16px;
  border-radius: 8px;

  + button {
    margin-top: 8px;
  }
`;

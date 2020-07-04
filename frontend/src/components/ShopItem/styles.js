import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  row-gap: 16px;
  padding: 8px;
  background: ${({ theme }) => theme.lightOrange};
  border-radius: 8px;
`;

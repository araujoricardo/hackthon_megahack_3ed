import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  padding: 8px;
  background: ${({ theme }) => theme.darkOrange};
`;

export const InfoHeader = styled.div`
  height: 32px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: flex-start;

  font-size: 16px;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ItemsWrapper = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  column-gap: 8px;
  row-gap: 8px;
  align-content: flex-start;
`;

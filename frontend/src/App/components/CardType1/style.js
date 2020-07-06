import styled from "styled-components";

export const Card1Wrapper = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 15px;
  color: #252525;
  border-top: 3px solid #1e839d;
`;

export const Question = styled.h2`
  font-size: 1.5em;
  height: 20%;
`;

export const WrapperOptions = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Option = styled.div`
  border-radius: 15px;
  background-color: rgba(88, 88, 88, 38%);
  padding: 15px 10px;

  :nth-of-type(${(props) => props.active}) {
    && {
      background-color: rgba(30, 131, 157, 58%);
    }
  }
  :nth-of-type(${(props) => props.active}) {
    && {
      background-color: gold;
    }
  }
`;

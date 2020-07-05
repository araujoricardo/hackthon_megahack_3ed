import styled from "styled-components";

export const MainWrapper = styled.section``;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgQuiz = styled.img`
  height: 180px;
  object-fit: cover;
`;

export const WrapperStyle = styled.div`
  background-color: rgb(30, 131, 157, 58%);
`;

export const TextWrapper = styled.div`
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 45vh;
  border-radius: 0 0 80px 80px;
  padding-left: 35px;

  h1 {
    font-size: 1.5em;
  }

  ul {
    margin-top: 25px;
  }

  li {
    padding: 5px 0;
    font-size: 1.2em;
  }
`;
export const ButtonsWrapper = styled.div`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;

  justify-content: space-around;
`;

export const ButtonBack = styled.button`
  width: 120px;
  padding: 10px 0;
  border-radius: 25px;
  border: none;
`;

export const ButtonStart = styled.button`
  width: 120px;
  padding: 10px 0;
  background-color: #585858;
  color: #ffff;
  border-radius: 25px;
  border: none;
`;

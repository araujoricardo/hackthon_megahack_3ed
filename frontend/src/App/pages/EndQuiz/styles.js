import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 65px);
  background: rgba(30, 131, 157, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
      width: 100%;
    }

    > p,
    h3 {
      font-size: 24px;
    }
  }

  div:nth-of-type(2) {
    background: #fff;
    height: 50%;
    width: 100%;
    padding-top: 64px;
    border-radius: 64px 64px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
      font-size: 20px;
    }

    > div {
      margin-top: 32px;
      width: 80%;
      height: 80px;
      background: rgba(30, 131, 157, 0.3);
      border-radius: 40px;
      display: flex;
      align-items: center;
      padding: 0 32px;

      > img {
        height: 48px;
        margin-right: 8px;
      }

      p:nth-of-type(2) {
        margin-left: auto;
      }
    }
  }
`;

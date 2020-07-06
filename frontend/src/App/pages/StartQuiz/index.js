import React from "react";
import { connect } from "react-redux";
import { routes } from "../../Router";
import { push } from "connected-react-router";
import Footer from "../../components/Footer";
import {
  MainWrapper,
  ImgWrapper,
  ImgQuiz,
  WrapperStyle,
  TextWrapper,
  ButtonsWrapper,
  ButtonBack,
  ButtonStart,
} from "./style";
import imgQuiz from "../../../assets/startQuiz.svg";

export class StartQuiz extends React.Component {
  render() {
    return (
      <MainWrapper>
        <ImgWrapper>
          <ImgQuiz src={imgQuiz} />
        </ImgWrapper>
        <WrapperStyle>
          <TextWrapper>
            <h1>
              Iniciar quiz: <br /> Saúde mental no trabalho
            </h1>
            <ul>
              <li>Hábitos saudáveis</li>
              <li>Relacionamento entre a equipe</li>
              <li>Produtividade e contribuição</li>
            </ul>
          </TextWrapper>
          <ButtonsWrapper>
            <ButtonBack onClick={this.props.gotToHome}> VOLTAR </ButtonBack>
            <ButtonStart onClick={this.props.goToQuiz}> INICIAR </ButtonStart>
          </ButtonsWrapper>
        </WrapperStyle>
      </MainWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  gotToHome: () => dispatch(push(routes.home)),
  goToQuiz: () => dispatch(push(routes.quiz)),
});

export default connect(null, mapDispatchToProps)(StartQuiz);

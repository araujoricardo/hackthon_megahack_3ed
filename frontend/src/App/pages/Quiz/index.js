import React from "react";
import { connect } from "react-redux";
import CardType1 from "../../components/CardType1";
import { setAnswer, setQuestion } from "../../../redux/actions/quiz";
import { content } from "../../../contents/content1";
import { ButtonQuizz, NumberPage, QuizzWrapper } from "./style";
import { replace } from "connected-react-router";
import { routes } from "../../Router";

class Quiz extends React.Component {
  renderContent = () => {
    const question = content[this.props.currentQuestion];
    switch (question.type) {
      case "card1": {
        return (
          <CardType1
            activeOption={this.props.answer[this.props.currentQuestion]}
            question={question}
            handleAnswer={this.handleAnswer}
          />
        );
      }
      case "card2": {
        return console.log("card2");
      }
    }
  };

  handleAnswer = (value) => {
    const { answer, currentQuestion, setAnswer } = this.props;
    const answers = [...answer];
    answers[currentQuestion] = value;
    setAnswer(answers);
  };

  handleChangeQuestion = (value) => {
    const { currentQuestion, answer } = this.props;
    const nextQuestion = currentQuestion + value;
    if (content[currentQuestion].answer === answer[currentQuestion]) {
      console.log("resposta certa");
    } else {
      console.log("resposta errada");
    }
    if (content[nextQuestion]) {
      this.props.setQuestion(currentQuestion + value);
    }
  };

  render() {
    const pageNumber = this.props.currentQuestion + 1;
    return (
      <QuizzWrapper>
        <NumberPage>
          {pageNumber}/{content.length}
        </NumberPage>
        {this.renderContent()}
        {this.props.currentQuestion === content.length - 1 ? (
          <ButtonQuizz onClick={() => this.props.goToEndQuiz()}>
            Voltar
          </ButtonQuizz>
        ) : (
          <ButtonQuizz onClick={() => this.handleChangeQuestion(1)}>
            Próximo
          </ButtonQuizz>
        )}
        {this.props.currentQuestion !== 0 && (
          <ButtonQuizz onClick={() => this.handleChangeQuestion(-1)}>
            Voltar
          </ButtonQuizz>
        )}
      </QuizzWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  currentQuestion: state.quiz.currentQuestion,
  answer: state.quiz.answer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setQuestion: (value) => dispatch(setQuestion(value)),
    setAnswer: (value) => dispatch(setAnswer(value)),
    goToEndQuiz: () => dispatch(replace(routes.endQuiz)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

import { push } from "connected-react-router";
import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../Router";
import {
  Button,
  CardTitle,
  CourseCard,
  CourseCard2,
  CourseCard3,
  CourseCard4,
  CourseName,
  Status,
  WrapperCurso,
} from "./style";

class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { gotToQuiz } = this.props;

    return (
      <WrapperCurso>
        <CourseCard>
          <CardTitle>A1</CardTitle>
          <CourseName>Inteligência Emocional</CourseName>
          <Status>Disponível</Status>
          <Button onClick={gotToQuiz}>Partcipar</Button>
        </CourseCard>

        <CourseCard2>
          <CardTitle>A2</CardTitle>
          <CourseName>Desenvolvendo Soft Skills</CourseName>
          <Status>Disponível em breve</Status>
        </CourseCard2>

        <CourseCard3>
          <CardTitle>A3</CardTitle>
          <CourseName>Desafio de estar Embarcado</CourseName>
          <Status>Disponível em breve</Status>
        </CourseCard3>

        <CourseCard4>
          <CardTitle>B1</CardTitle>
          <CourseName>Uso adequado de EPIs</CourseName>
          <Status>Disponível em breve</Status>
        </CourseCard4>
      </WrapperCurso>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  gotToQuiz: () => dispatch(push(routes.quiz)),
});

export default connect(null, mapDispatchToProps)(Courses);

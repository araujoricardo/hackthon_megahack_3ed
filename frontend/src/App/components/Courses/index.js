import React, { Component } from "react";
import { connect } from "react-redux";
import { routes } from "../../Router";
import { push } from "connected-react-router";
import {
  WrapperCurso,
  CourseCard,
  CourseCard2,
  CourseCard3,
  CourseCard4,
  CardTitle,
  CourseName,
  Div,
  Status,
  Button,
} from "./style";

class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { gotToQuiz } = this.props;

    return (
      <Div>
        <WrapperCurso>
          <CourseCard>
            <CardTitle>A1</CardTitle>
            <CourseName>
              Inteligência
              <br />
              Emocional
            </CourseName>
            <Status>Disponível</Status>
            <Button onClick={gotToQuiz}>Partcipar</Button>

            {/* <img src={require("../../assets/curso1.png")} 
                    alt="curso1" /> */}
          </CourseCard>

          <CourseCard2>
            <CardTitle>A2</CardTitle>
            <CourseName>
              Desenvolvendo
              <br />
              Soft Skills
            </CourseName>
            <Status>Disponível em breve</Status>
            {/* <img src={require("../../assets/curso2.png")} 
                        alt="curso2" /> */}
          </CourseCard2>

          <CourseCard3>
            <CardTitle>A3</CardTitle>
            <CourseName>
              Desafio de estar
              <br />
              Embarcado
            </CourseName>
            <Status>Disponível em breve</Status>
            {/* <img src={require("../../assets/curso3.png")} 
                        alt="curso3" /> */}
          </CourseCard3>

          <CourseCard4>
            <CardTitle>B1</CardTitle>
            <CourseName>
              Uso adequado
              <br />
              de EPIs
            </CourseName>
            <Status>Disponível em breve</Status>
            {/* <img src={require("../../assets/curso4.png")} 
                      alt="curso4" /> */}
          </CourseCard4>
        </WrapperCurso>
      </Div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  gotToQuiz: () => dispatch(push(routes.quiz)),
});

export default connect(null, mapDispatchToProps)(Courses);

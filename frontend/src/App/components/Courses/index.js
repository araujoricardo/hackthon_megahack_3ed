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
import { FiXCircle, FiCheckCircle } from "react-icons/fi";
import { unlockItem } from "../../../redux/actions/shop";

class Courses extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { gotToQuiz, unlockedCourses, unlockItem } = this.props;

    return (
      <WrapperCurso>
        <CourseCard>
          <CardTitle>A1</CardTitle>
          <CourseName>Inteligência Emocional</CourseName>
          <Status>
            {unlockedCourses[0] ? (
              <FiCheckCircle />
            ) : (
              <>
                <FiXCircle />
                <p>50pts</p>
              </>
            )}
          </Status>
          {unlockedCourses[0] ? (
            <Button onClick={gotToQuiz}>Partcipar</Button>
          ) : (
            <Button
              onClick={() => {
                unlockItem(0);
              }}
            >
              Desbloquear
            </Button>
          )}
        </CourseCard>

        <CourseCard2>
          <CardTitle>A2</CardTitle>
          <CourseName>Desenvolvendo Soft Skills</CourseName>
          <Status>
            {unlockedCourses[1] ? (
              <FiCheckCircle />
            ) : (
              <>
                <FiXCircle />
                <p>50pts</p>
              </>
            )}
          </Status>
          {unlockedCourses[1] ? (
            <Button onClick={gotToQuiz}>Partcipar</Button>
          ) : (
            <Button
              onClick={() => {
                unlockItem(1);
              }}
            >
              Desbloquear
            </Button>
          )}
        </CourseCard2>

        <CourseCard3>
          <CardTitle>A3</CardTitle>
          <CourseName>Desafio de estar Embarcado</CourseName>
          <Status>
            {unlockedCourses[2] ? (
              <FiCheckCircle />
            ) : (
              <>
                <FiXCircle />
                <p>50pts</p>
              </>
            )}
          </Status>
          {unlockedCourses[2] ? (
            <Button onClick={gotToQuiz}>Partcipar</Button>
          ) : (
            <Button
              onClick={() => {
                unlockItem(2);
              }}
            >
              Desbloquear
            </Button>
          )}
        </CourseCard3>

        <CourseCard4>
          <CardTitle>B1</CardTitle>
          <CourseName>Uso adequado de EPIs</CourseName>
          <Status>
            {unlockedCourses[3] ? (
              <FiCheckCircle />
            ) : (
              <>
                <FiXCircle />
                <p>50pts</p>
              </>
            )}
          </Status>
          {unlockedCourses[3] ? (
            <Button onClick={gotToQuiz}>Partcipar</Button>
          ) : (
            <Button
              onClick={() => {
                unlockItem(3);
              }}
            >
              Desbloquear
            </Button>
          )}
        </CourseCard4>
      </WrapperCurso>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  gotToQuiz: () => dispatch(push(routes.startQuiz)),
  unlockItem: (id) => dispatch(unlockItem(id)),
});

export default connect(
  (state) => ({
    unlockedCourses: state.shop.unlockedCourses,
  }),
  mapDispatchToProps
)(Courses);

import React from "react";
import { Container } from "./styles";
import Footer from "../../components/Footer";
import avatar from "../../../assets/undraw_female_avatar_w3jk.svg";
import winners from "../../../assets/undraw_winners_ao2o.png";

class EndQuiz extends React.Component {
  render() {
    return (
      <>
        <Container>
          <div>
            <img src={winners} alt="" />
            <p>Você Ganhou</p>
            <h3>+50pts</h3>
          </div>
          <div>
            <p>Pontuação</p>
            <div>
              <img src={avatar} alt="" />
              <p>Olga</p>
              <p>240</p>
            </div>
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}

export default EndQuiz;

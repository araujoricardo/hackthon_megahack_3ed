import React from "react";
import Footer from "../../components/Footer/index";
import { WrapperHome, Title, Div } from "./style";
import Courses from "../../components/Courses/index";
import Search from "../../components/Search";

export default class Home extends React.Component {
  render() {
    return (
      <Div>
        <WrapperHome>
          <Title>Cursos disponíveis</Title>
          <Search />

          <Courses />
        </WrapperHome>
        <Footer />
      </Div>
    );
  }
}

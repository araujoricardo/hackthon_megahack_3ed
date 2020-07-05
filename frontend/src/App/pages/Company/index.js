import React from "react";
import { WrapperCompany, Img, CardText } from "./style";
import Footer from "../../components/Footer";

export default class Company extends React.Component {
  render() {
    return (
      <WrapperCompany>
        <Img
          src={require("../../../assets/image.png")}
          alt="logo da HamiTrainning"
        ></Img>
        <CardText>
          Para nós, mais do que acreditar na educação como o melhor caminho para
          mudar a realidade das pessoas, é preciso fazer parte dessa
          transformação todos os dias.
        </CardText>
        <Footer />
      </WrapperCompany>
    );
  }
}

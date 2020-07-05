import React from "react";
import { WrapperProfile, Title, Div, Info } from "./style";
import Footer from "../../components/Footer";

export default class Profile extends React.Component {
  render() {
    return (
      <Div>
        <WrapperProfile>
          <Title>Meu perfil</Title>
        </WrapperProfile>
        <Info>
          <p>
            <strong>Nome: </strong>Margaret Hamilton
          </p>
          <br />
          <p>
            <strong>Cargo: </strong>
          </p>
          <br />
          <p>
            <strong>CPF: </strong>123-456-789-00
          </p>
          <br />
          <p>
            <strong>Telefone: </strong>(XX)9999-9999
          </p>
          <br />
          <p>
            <strong>E-mail: </strong>margaret@labenu
          </p>
        </Info>
        <Footer />
      </Div>
    );
  }
}

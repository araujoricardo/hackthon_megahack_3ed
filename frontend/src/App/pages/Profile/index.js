import React from "react";
import { WrapperProfile, Title, Div, Info, Img } from "./style";
import Footer from "../../components/Footer";
import kesNatalia from "../../../assets/undraw_female_avatar_w3jk.svg";

export default class Profile extends React.Component {

  render() {

    return (

      <Div>
       
         <WrapperProfile>
           <Title>Meu perfil</Title>
         </WrapperProfile>
         
        <Info
        ><Img
         src={kesNatalia}
          alt="logo da HamiTrainning"
         ></Img>
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

import React from "react";
import { WrapperCompany, Img, CardText, TextWrapper, Wrapper, 
  Faq, Faq2, Faq3 } from "./style";
import Footer from "../../components/Footer";
import perfil from "../../../assets/perfil.png";
import seta from "../../../assets/seta.svg";

export default class Company extends React.Component {
  render() {
    return (
      <WrapperCompany>
        <CardText>
          <Img
            src={perfil}
            alt="imagem de contato"
          ></Img>
        </CardText>

        <TextWrapper>
         <Wrapper>
            <h1>Contatos</h1>
            <ol>
              <p><strong>Fone: </strong> 
                +55 2323-0909
              </p>
              <p><strong>E-mail: </strong> 
                HamiTrainning@labenu.com
              </p>
              <p><strong>Endereço: </strong>
                 Margaret Hamilton, 234
              </p>
            </ol>
         </Wrapper>

          <h1>FAQ</h1>
          <Faq>
             <img
              style = {{width:"12px"}}
              src={seta}
              alt="seta"
            ></img> Como acessar os cursos? 
          </Faq>
          <Faq2> 
             <img
              style = {{width:"12px"}}
              src={seta}
              alt="seta"
            ></img> Qual prazo de conclusão? 
          </Faq2>
          <Faq3>
              <img
              style = {{width:"12px"}}
              src={seta}
              alt="seta"
            ></img> Qual prazo de conclusão? 
          </Faq3>
        
       
          </TextWrapper>
        <Footer />
      </WrapperCompany>
    );
  }
}

import React from "react";
import Footer from "../../components/Footer"
import { MainWrapper, ImgWrapper, ImgQuiz, TextWrapper, ButtonsWrapper, ButtonBack, ButtonStart } from "./style"
import imgQuiz from "../../assets/startQuiz.svg"

export default class StartQuiz extends React.Component {
    render(){
        return(
            <MainWrapper>
                <ImgWrapper>
                    <ImgQuiz src={imgQuiz}/>
                </ImgWrapper>
                <TextWrapper>
                    <h1>Iniciar Quiz </h1>
                    <ul>
                        <li>primeiro</li>
                    </ul>
                </TextWrapper>
                <ButtonsWrapper>
                    <ButtonBack> Voltar </ButtonBack>
                    <ButtonStart> Iniciar </ButtonStart>  
                </ButtonsWrapper>
                <Footer/>
            </MainWrapper>
        )
    }
}
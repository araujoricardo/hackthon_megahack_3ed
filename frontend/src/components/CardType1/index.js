import React from "react";
import {Card1Wrapper} from "./style";

export default function CardType1(props){

    const question = props.element;
    
    const handleOnChange=(event)=>{
        props.handleAnswer(event.target.value);
    };
    
    return(
        <Card1Wrapper>
            <p>question</p>
            <p>{question.text}</p>
            <p>Resposta: </p>

            <input type="checkbox" 
                onChange={handleOnChange}
                value="a"/>
            <label>{question.options.a}</label>
            <br/>
            <input type="checkbox" 
                onChange={handleOnChange}
                value="b"/>
            <label>{question.options.b}</label>
            <br/>
            <input type="checkbox" 
                onChange={handleOnChange}
                value="c"/>
            <label>{question.options.c}</label>
            <br/>
            <input type="checkbox" 
                onChange={handleOnChange}
                value="d"/>
            <label>{question.options.d}</label>
        </Card1Wrapper>
    );
};
import React from "react";
import CardType1 from "../../components/CardType1";
import {content1} from "../../contents/content1";
import { connect } from "react-redux";
import {setQuestion, setAnswer} from "../../containers/actions/quiz";


class Quiz extends React.Component{

    renderContent = () =>{
        const question = content1[this.props.currentQuestion];

        switch(question.type){
            case "card1":{
                return (<CardType1 element={question} 
                                handleAnswer={this.handleAnswer}/>)
            };
            case "card2":{
                return console.log("card2");
            };
        };
    };


    handleAnswer = (value) =>{
        const {answer, currentQuestion, setAnswer} = this.props;

        const answers = answer;
        answers[currentQuestion] = value;

        setAnswer(answers);
    };

    
    handleChangeQuestion = (value) =>{
        const {currentQuestion, answer} = this.props
        const aux = currentQuestion + value;


        if(content1[currentQuestion].answer === answer[currentQuestion]){
            console.log("resposta certa");
        }else{
            console.log("resposta errada");
        };

        if(content1[aux]){
            this.props.setQuestion(value);
        };
    };





    render(){
        return(
            <div>
                QUIZ
                {this.renderContent()}
                <button onClick={()=>this.handleChangeQuestion(1)}>next</button>
                <button onClick={()=>this.handleChangeQuestion(-1)}>back</button>
            </div>
        );
    };

};

const mapStateToProps = (state) => ({
    currentQuestion: state.quiz.currentQuestion,
    answer : state.quiz.answer
});

const mapDispatchToProps = (dispatch) => {
    return{
        setQuestion: (value) => dispatch(setQuestion(value)),
        setAnswer: (value) => dispatch(setAnswer(value))
    };
};


export default connect(mapStateToProps, mapDispatchToProps) (Quiz);

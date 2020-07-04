import React from "react";
import CardType1 from "../../components/CardType1";
import {content1} from "../../contents/content1";
import { connect } from "react-redux";


class Quiz extends React.Component{

    renderContent = () =>{
        // return content1.map((element)=>{
        //     return (
        //         <CardType1
        //             text={element.text}
        //         />
        //     );
        // });

        const element = content1[this.props.content1];
        return (
            <CardType1
                text={content1[0].text}
            />
        );
    };

    render(){
        return(
            <div>
                QUIZ
                {this.renderContent()}
            </div>
        );
    };

};

const mapStateToProps = (state) => ({
    currentQuestion: state.quiz.currentQuestion
});



export default connect(mapStateToProps, null) (Quiz);

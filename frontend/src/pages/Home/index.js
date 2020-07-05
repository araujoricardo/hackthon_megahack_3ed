import React from "react";
import Footer from '../../Components/Footer/index';
import { WrapperHome, Title, Div} from './style';
import Courses from '../../Components/Courses/index';

export default class Home extends React.Component {


    render(){
        return(
            <Div>
            <WrapperHome>

                   <Title>Cursos disponíveis</Title> 
                
                <Courses />
            </WrapperHome>  
            <Footer />
            </Div>
        )
    };
};


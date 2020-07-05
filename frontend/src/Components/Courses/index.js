import React, {Component } from "react"
import { WrapperCurso, Course, Div,} from './style';

export default class Courses extends Component {
    constructor(props) {
    super(props)

    this.state = {

    }
}

render() {

 return (
     <Div>
        <WrapperCurso>
           
                <Course>
                 <img src={require("../../assets/curso1.png")} 
                        alt="curso1" />
                </Course>

                <Course>
                <img src={require("../../assets/curso2.png")} 
                        alt="curso2" />
                </Course>
           
                <Course>
                <img src={require("../../assets/curso3.png")} 
                        alt="curso3" />
                </Course>

                <Course>
                <img src={require("../../assets/curso4.png")} 
                      alt="curso4" />
                </Course>
        
            
        </WrapperCurso>
     </Div>
 );
}

}
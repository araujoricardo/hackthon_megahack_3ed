import React, {Component, Fragment} from "react"
import { connect } from"react-redux"
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { Wrapper, Img } from "./style";

class SplashScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            
    };
}

handleSplash = (e) => {
   
    this.props.goToHome()

 }

render() {
   
    return (
     <Fragment>
         
             <Wrapper onClick={this.handleSplash}>
                 <Img src={require("../../assets/image.png")} 
                    alt="logo da HamiTrainning" 
                /> 
             </Wrapper>
        
     </Fragment>
    )
}
} 
const mapDispatchToProps = dispatch => ({
   
    goToHome: () => dispatch(push(routes.home)),
   
})


export default connect(null, mapDispatchToProps)(SplashScreen)

/*
const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

export const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
       //LOGO
      </div>
    )}
  </Transition>
); */
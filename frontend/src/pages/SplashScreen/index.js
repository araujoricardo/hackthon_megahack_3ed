import React, {Component, Fragment} from "react"
import { connect } from"react-redux"
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import styled from 'styled-components'

const Wrapper= styled.div `
    background-color:#1E839D;
    height:100vh;
    display:flex;
    justify-content:center;
`


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
                {/* <img src={require()} 
                    alt="logo da HamiTrainning" 
                /> */}
                <p>LOGO</p>
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
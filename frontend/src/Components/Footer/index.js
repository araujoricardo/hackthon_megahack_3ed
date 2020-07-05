import React, {Component } from "react"
import {connect} from 'react-redux';
import { routes } from "../../containers/Router";
import { push } from "connected-react-router";
import { WrapperIcons,DivIcon, Img} from './style';
import Divider from '@material-ui/core/Divider'

class Footer extends Component {
    constructor(props) {
    super(props)

    this.state = {

    }}

 render() {
     const { goToHome, goToMyProfile, goToCompany} = this.props
     
 return (
        <WrapperIcons>  
          <DivIcon>
                
             <Img src = {require('../../assets/work.svg')}
                 title="Maleta" 
                 alt="ícone para ir para informações sobre empresa" 
                 style = {{color: "very dark gray"}}
                 onCLick= {goToCompany}
             />
                    
            </DivIcon>                                                  
            <DivIcon> 
             <Img src={require('../../assets/home.png')} 
                    title = "Home"
                    alt="ícone para ir para home"
                    onCLick= {goToHome}
             /> 
              
            </DivIcon>  
            <DivIcon> 
             <Img src={require('../../assets/account.png')} 
                title="Perfil" 
                alt="ícone para ir para o perfil do usuário"
                onCLick= {goToMyProfile}
             /> 
               
            </DivIcon>
        </WrapperIcons>
      
        );
    
    }   
 }
 const mapDispatchToProps = (dispatch) => ({
    gotToHome: () => dispatch(push(routes.home)),
    goToMyProfile: () => dispatch(push(routes.profile)),
    goToCompany: () => dispatch(push(routes.company))

 })


export default connect(null,mapDispatchToProps)(Footer)
import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";

class Initial extends React.Component{

    componentDidMount(){
        window.setTimeout(
            this.props.goToHomePage, 2000
        );
    };


    render(){
        return(
            <div>
                APP MUITO LEGAL
                <p>aqui colocamos o logo</p>
            </div>
        );
    };

};

const mapDispatchToProps = dispath => {
    return {
        goToHomePage: () => dispath(push(routes.home))
    };
};

export default connect(null, mapDispatchToProps) (Initial);
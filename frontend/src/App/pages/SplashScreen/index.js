import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../Router";
import { Wrapper, Img } from "./style";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.setTimeout(this.props.goToHome, 1000);
  }

  render() {
    return (
      <Fragment>
        <Wrapper>
          <Img
            src={require("../../../assets/image.png")}
            alt="logo da HamiTrainning"
          />
        </Wrapper>
      </Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  goToHome: () => dispatch(push(routes.home)),
});

export default connect(null, mapDispatchToProps)(SplashScreen);

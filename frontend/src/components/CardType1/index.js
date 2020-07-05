import React from "react";
import { Card1Wrapper, Question, WrapperOptions, Option } from "./style";

export default class CardType1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeOption: 0,
    };
  }

  handleActive = (value) => {
    let letterToNumber = value.charCodeAt() - 96;

    this.setState({ activeOption: letterToNumber });
  };

  handleOnClick = (value) => {
    this.handleActive(value);
    this.props.handleAnswer(value);
  };

  render() {
    const question = this.props.element;
    return (
      <Card1Wrapper>
        <Question>{question.text}</Question>
        <WrapperOptions>
          <Option
            active={this.state.activeOption}
            onClick={() => this.handleOnClick("a")}
            value="a"
          >
            {question.options.a}
          </Option>
          <Option
            active={this.state.activeOption}
            onClick={() => this.handleOnClick("b")}
            value="b"
          >
            {question.options.a}
          </Option>
          <Option
            active={this.state.activeOption}
            onClick={() => this.handleOnClick("c")}
            value="c"
          >
            {question.options.a}
          </Option>
          <Option
            active={this.state.activeOption}
            onClick={() => this.handleOnClick("d")}
            value="d"
          >
            {question.options.a}
          </Option>
        </WrapperOptions>
      </Card1Wrapper>
    );
  }
}

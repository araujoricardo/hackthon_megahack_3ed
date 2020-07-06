import React from "react";
import { Card1Wrapper, Question, WrapperOptions, Option } from "./style";

export default class CardType1 extends React.Component {
  handleOnClick = (value) => {
    this.props.handleAnswer(value);
  };

  render() {
    const { question } = this.props;
    return (
      <Card1Wrapper>
        <Question>{question.text}</Question>
        <WrapperOptions>
          <Option
            active={this.props.activeOption}
            onClick={() => this.handleOnClick(1)}
          >
            {question.options[0]}
          </Option>
          <Option
            active={this.props.activeOption}
            onClick={() => this.handleOnClick(2)}
          >
            {question.options[1]}
          </Option>
          <Option
            active={this.props.activeOption}
            onClick={() => this.handleOnClick(3)}
          >
            {question.options[2]}
          </Option>
          <Option
            active={this.props.activeOption}
            onClick={() => this.handleOnClick(4)}
          >
            {question.options[3]}
          </Option>
        </WrapperOptions>
      </Card1Wrapper>
    );
  }
}

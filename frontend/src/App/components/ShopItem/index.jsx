import React from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { buyItem } from "../../../redux/actions/shop";

class ShopItem extends React.Component {
  handleClick = () => {
    if (this.props.balance >= this.props.price)
      this.props.buyItem(this.props.id, this.props.price);
  };

  render() {
    const { title, price } = this.props;

    return (
      <Container>
        <h3>{title}</h3>
        <p>${price}</p>
        <button onClick={this.handleClick}>Comprar</button>
      </Container>
    );
  }
}

export default connect((state) => ({ balance: state.shop.balance }), {
  buyItem,
})(ShopItem);

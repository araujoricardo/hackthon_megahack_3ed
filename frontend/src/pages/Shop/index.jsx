import React from "react";
import { Container, InfoHeader, ItemsWrapper } from "./styles";
import ShopItem from "../../components/ShopItem";
import { FiDollarSign } from "react-icons/fi";
import { connect } from "react-redux";

class Shop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      shop: { balance, itens },
    } = this.props;

    const mappedItens = itens.map(({ title, price, id }) => (
      <ShopItem key={id} title={title} price={price} />
    ));

    return (
      <Container>
        <InfoHeader>
          <FiDollarSign />: {balance}
        </InfoHeader>
        <ItemsWrapper>{mappedItens}</ItemsWrapper>
      </Container>
    );
  }
}

export default connect(
  (state) => ({
    shop: state.shop,
  }),
  null
)(Shop);

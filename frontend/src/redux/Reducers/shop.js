const initialState = {
  balance: 132,
  itens: [
    { id: 1, title: "Curso Legal 1", price: 90 },
    { id: 2, title: "Curso Legal 2", price: 85 },
    { id: 3, title: "Curso Legal 3", price: 64 },
  ],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_ITEM":
      return {
        ...state,
        balance: state.balance - action.payload.itemPrice,
      };
    default:
      return state;
  }
};

export default shopReducer;

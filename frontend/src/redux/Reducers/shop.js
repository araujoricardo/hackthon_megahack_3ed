const initialState = {
  balance: 132,
  itens: [
    { id: 1, title: "Curso Legal 1", price: 90 },
    { id: 2, title: "Curso Legal 2", price: 85 },
    { id: 3, title: "Curso Legal 3", price: 64 },
  ],
  unlockedCourses: [true, false, false, false],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_ITEM":
      return {
        ...state,
        balance: state.balance - action.payload.itemPrice,
      };
    case "ADD_BALANCE":
      return {
        ...state,
        balance: state.balance + action.payload.value,
      };
    case "UNLOCK_ITEM":
      if (state.balance >= 50)
        return {
          ...state,
          balance: state.balance - 50,
          unlockedCourses: state.unlockedCourses.map((_, i) =>
            i === action.payload.id ? true : _
          ),
        };
      else return state;
    default:
      return state;
  }
};

export default shopReducer;

const initialState = {
  currentQuestion: 0,
  answer: [],
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUESTION": {
      return {
        ...state,
        currentQuestion: state.currentQuestion + action.payload.value,
      };
    }
    case "SET_ANSWER": {
      return { ...state, answer: action.payload.answer };
    }
    default:
      return state;
  }
};

export default quiz;

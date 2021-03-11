const initialState = {
  text: [],
  noOfCakes: 10
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        noOfCakes: state.noOfCakes + 1
      };

    default:
      console.log("default", action.type);
      return state;
  }
};

export default cakeReducer;
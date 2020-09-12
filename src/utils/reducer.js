// THE DATA LAYER

export const initialState = {
  basket: [],
};

const reducer = (state, action /*CRUD action*/) => {
  // console.log("action: ", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let newBasket = [];
      state.basket.map((_, i) => {
        if (i !== action.index) {
          newBasket = [...newBasket, state.basket[i]];
        }
      });
      state.basket = newBasket;
      return {
        ...state,
        basket: [...state.basket],
      };

    default:
      return state;
  }
};

export default reducer;

export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotalValue = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log(action);
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let actualBasket = state.basket;
      let itemFound = false;
      state.basket = [];
      actualBasket.map((_, i) => {
        if (i !== action.index) {
          state.basket = [...state.basket, actualBasket[i]];
        } else {
          itemFound = true;
        }
      });
      if (!itemFound) {
        console.log("Item index ", action.index, " not found, not deleted.");
      }
      return {
        ...state,
        basket: [...state.basket],
      };

    default:
      console.log(
        "ACTION: ",
        action.type ? action.type : "DEFAULT REDUCER OPTION"
      );
      return state;
  }
};

export default reducer;

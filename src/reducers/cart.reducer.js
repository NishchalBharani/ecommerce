import * as cartAction from "../actions/cart.action"

const initialState = {
    clothesForCheckout: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case cartAction.CART_ACTION:
        console.log("Reducer - SET_CLOTHES_FOR_CHECKOUT", action.payload);
        return {
          ...state,
          clothesForCheckout: action.payload,
        }
      default:
        console.log("Reducer - Default Case");
        return state;
    }
  };
  

export default cartReducer;
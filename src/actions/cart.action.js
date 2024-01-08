export const CART_ACTION  = "CART_ACTION"

export const setClothesForCheckout = (clothes) => {
    console.log("action", clothes);
    return {
      type: CART_ACTION,
      payload: clothes,
    };
  };
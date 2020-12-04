import { CART } from './cartConstants';

const cartAction = {
  addToCart: (payload) => ({ type: CART.ADD_TO_CART, payload }),
  // addToCartSuccess: (payload) => ({ type: CART.ADD_TO_SUCCESS, payload }),
  // addToCartError: (payload) => ({ type: CART.ADD_TO_ERROR, payload }),
};

export { cartAction };

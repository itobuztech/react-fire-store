import { CART } from './cartConstants';

const cartAction = {
  getCart: () => ({ type: CART.GET_CART_REQUEST }),
  getCartSuccess: (payload) => ({ type: CART.GET_CART_SUCCESS, payload }),
  getCartError: (payload) => ({ type: CART.GET_CART_ERROR, payload }),

  addToCart: (payload) => ({ type: CART.ADD_TO_CART_REQUEST, payload }),
  addToCartSuccess: (payload) => ({ type: CART.ADD_TO_CART_SUCCESS, payload }),
  addToCartError: (payload) => ({ type: CART.ADD_TO_CART_ERROR, payload }),

  editCart: (payload, docId) => ({ type: CART.EDIT_CART_REQUEST, payload, docId }),
  editCartSuccess: (payload, docId) => ({ type: CART.EDIT_CART_SUCCESS, payload, docId }),
  editCartError: (payload) => ({ type: CART.EDIT_CART_ERROR, payload }),

  changeQuantity: (payload) => ({ type: CART.CHANGE_QUANTITY_REQUEST, payload }),
  changeQuantitySuccess: (payload) => ({ type: CART.CHANGE_QUANTITY_SUCCESS, payload }),
  changeQuantityError: (payload) => ({ type: CART.CHANGE_QUANTITY_ERROR, payload }),

  deleteCartRequest: (id) => ({ type: CART.DELETE_CART_REQUEST, id }),
  deleteCartSuccess: (id) => ({ type: CART.DELETE_CART_SUCCESS, id }),
  deleteCartError: (payload) => ({ type: CART.DELETE_CART_ERROR, payload }),
};

export { cartAction };

import { createBrowserHistory } from 'history';

import { CART } from './cartConstants';
import { redirectTo } from '../../route';

const initialState = {
  cart: [],
  addToCartSuccess: null,
  addToCartError: null,
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    // case CART.ADD_TO_REQUEST:
    //   return { ...state,  };
    case CART.ADD_TO_CART: {
      redirectTo('/cart');
      return { ...state, cart: action.payload };
    }

    // case CART.ADD_TO_ERROR:
    //   return { ...state, addToCartError: action.payload };
    default:
      return state;
  }
};

export default cartReducer;

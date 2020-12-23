import { CART } from './cartConstants';

const initialState = {
  cart: [],
  addToCartSuccess: null,
  addToCartError: null,
  quantityError: null,
  totalPrice: null
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case CART.GET_CART_SUCCESS:
      return { ...state, cart: action.payload };

    case CART.GET_CART_ERROR:
      return { ...state, addToCartError: action.payload };

    case CART.ADD_TO_CART_SUCCESS: {
      return { ...state, cart: [ ...state.cart, action.payload ] };
    }

    case CART.ADD_TO_CART_ERROR:
      return { ...state, addToCartError: action.payload };

    case CART.EDIT_CART_SUCCESS: {
      const products = state.cart.map((item) => {
        if (item.id === action.docId) {
          return { ...item, ...action.payload };
        }
        return item;
      });
      return {
        ...state,
        products,
        modalOpen: false,
      };
    }

    case CART.EDIT_CART_ERROR:
      return { ...state, addToCartError: action.payload };

    case CART.CHANGE_QUANTITY_SUCCESS: {
      console.log({action});
      const product = action.payload.product;
      const type = action.payload.type;
      const cart = state.cart.map(item => {
        return {
          ...item,
          quantity: item.id === product.id
          ? (type === 'inc' ? product.quantity + 1 : product.quantity - 1)
          : item.quantity
        };
      })
      return { ...state, cart };
    }

    case CART.CHANGE_QUANTITY_ERROR:
      return { ...state, quantityError: action.payload };

    case CART.DELETE_FROM_CART_SUCCESS: {
      let updatedCart = state.cart.filter(item => item.id !== action.id);
      return { ...state, cart: updatedCart };
    }

    default:
      return state;
  }
};

export default cartReducer;

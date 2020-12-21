import { PRODUCTS } from './productsConstant';

const initialState = {
  products: [],
  productsWithoutFilter: [],
  productsError: null,
  addProductErr: null,
  productsSuccess: null,
  selectedProductFormData: null,
  modalOpen: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS.GET_PRODUCTS_SUCCESS: {
      return { ...state, products: action.payload, productsWithoutFilter: action.payload };
    }
    case PRODUCTS.GET_PRODUCTS_ERROR:
      return { ...state, productsError: action.payload };
    case PRODUCTS.ADD_PRODUCT_SUCCESS: {
      return { ...state, products: [ ...state.products, action.payload ], modalOpen: false };
    }
    case PRODUCTS.ADD_PRODUCT_ERROR:
      return { ...state, productsError: action.payload };
    case PRODUCTS.SELECTED_PRODUCT:
      return { ...state, selectedProductFormData: action.payload };
    case PRODUCTS.FILTER_PRODUCT: {
      const products = state.products.filter(prod => action.payload === prod.title);
      return { ...state, products };
    }
    case PRODUCTS.REMOVE_FILTER: {
      return { ...state, products: state.productsWithoutFilter };
    }
    case PRODUCTS.EDIT_PRODUCT_SUCCESS: {
      const products = state.products.map((prod) => {
        if (prod.id === action.docId) {
          return { ...prod, ...action.payload };
        }
        return prod;
      });
      return {
        ...state,
        products,
        modalOpen: false,
      };
    }
    case PRODUCTS.EDIT_PRODUCT_ERROR:
      return { ...state, productsError: action.payload };
    case PRODUCTS.DELETE_PRODUCT_SUCCESS: {
      let updatedProducts = state.products.filter(
        (product) => product.id !== action.id
      );
      return { ...state, products: updatedProducts };
    }
    case PRODUCTS.DELETE_PRODUCT_ERROR:
      return { ...state, productsError: action.payload };
    case 'PRODUCT_MODAL_OPEN':
      return { ...state, modalOpen: true };
    case 'PRODUCT_MODAL_CLOSE':
      return { ...state, modalOpen: false };
    default:
      return state;
  }
};

export default productsReducer;

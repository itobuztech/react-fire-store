import { PRODUCTS } from './productsConstant';

const initialState = {
    products: [],
    productsError: null,
    addProductErr: null,
    productsSuccess: null,
    modalOpen: false
};

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCTS.GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload };
        case PRODUCTS.GET_PRODUCTS_ERROR:
            return { ...state, productsError: action.payload };
        case PRODUCTS.ADD_PRODUCT_SUCCESS: {
            return { ...state, products: action.payload, modalOpen: false };
        }
        case PRODUCTS.ADD_PRODUCT_ERROR:
            return { ...state, productsError: action.payload };
        case "PRODUCT_MODAL_OPEN":
            return { ...state, modalOpen: true };
        case "PRODUCT_MODAL_CLOSE":
            return { ...state, modalOpen: false };
        default:
            return state;
    }
};

export default productsReducer;

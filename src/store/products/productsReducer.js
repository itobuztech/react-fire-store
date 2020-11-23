import { PRODUCTS } from './productsConstant';

const initialState = {
    products: [],
    productsError: null,
    productsSuccess: null,
};

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCTS.GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload };

        case PRODUCTS.GET_PRODUCTS_ERROR:
            return { ...state, productsError: action.payload };
        
        default:
            return state;
    }
};

export default productReducer;

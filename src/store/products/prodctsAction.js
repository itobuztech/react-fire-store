import { PRODUCTS } from './productsConstant';

const productAction = {
    getProductRrequest: (payload) => {
        return {
            type: PRODUCTS.GET_PRODUCTS_REQUEST,
            payload
        }
    },

    getProductSuccess: (payload) => {
        return {
            type: PRODUCTS.GET_PRODUCTS_SUCCESS,
            payload
        }
    },

    getProductError: (payload) => {
        return {
            type: PRODUCTS.GET_PRODUCTS_ERROR,
            payload
        }
    }

};

export { productAction };

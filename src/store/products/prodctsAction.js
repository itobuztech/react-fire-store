import { PRODUCTS } from './productsConstant';

const productAction = {
    getProductRequest: () => ({ type: PRODUCTS.GET_PRODUCTS_REQUEST }),

    getProductSuccess: (payload) => ({ type: PRODUCTS.GET_PRODUCTS_SUCCESS, payload }),

    getProductError: (payload) => ({ type: PRODUCTS.GET_PRODUCTS_ERROR, payload }),

    addProductRequest: (payload) => ({ type: PRODUCTS.ADD_PRODUCT_REQUEST, payload }),

    addProductSuccess: (payload) => ({ type: PRODUCTS.ADD_PRODUCT_SUCCESS, payload }),

    addProductError: (payload) => ({ type: PRODUCTS.ADD_PRODUCT_ERROR, payload }),

    deleteProductSuccess: (payload) => ({ type: PRODUCTS.DELETE_PRODUCT_SUCCESS, payload }),

    deleteProductError: (payload) => ({ type: PRODUCTS.DELETE_PRODUCT_ERROR, payload }),
};

export { productAction };

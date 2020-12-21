import { PRODUCTS } from './productsConstant';

const productAction = {
    getProductRequest: () => ({ type: PRODUCTS.GET_PRODUCTS_REQUEST }),

    getProductSuccess: (payload) => ({ type: PRODUCTS.GET_PRODUCTS_SUCCESS, payload }),

    getProductError: (payload) => ({ type: PRODUCTS.GET_PRODUCTS_ERROR, payload }),

    addProductRequest: (payload) => ({ type: PRODUCTS.ADD_PRODUCT_REQUEST, payload }),

    addProductSuccess: (payload) => ({ type: PRODUCTS.ADD_PRODUCT_SUCCESS, payload }),

    addProductError: (payload) => ({ type: PRODUCTS.ADD_PRODUCT_ERROR, payload }),

    editProductRequest: (payload, docId) => ({ type: PRODUCTS.EDIT_PRODUCT_REQUEST, payload, docId }),

    editProductSuccess: (payload, docId) => ({ type: PRODUCTS.EDIT_PRODUCT_SUCCESS, payload, docId }),

    editProductError: (payload) => ({ type: PRODUCTS.EDIT_PRODUCT_ERROR, payload }),

    selectedProduct: (payload) => ({ type: PRODUCTS.SELECTED_PRODUCT, payload }),

    filterProduct: (payload) => ({ type: PRODUCTS.FILTER_PRODUCT, payload }),

    removeFilterFromProducts: () => ({ type: PRODUCTS.REMOVE_FILTER }),

    deleteProductRequest: (id) => ({ type: PRODUCTS.DELETE_PRODUCT_REQUEST, id }),

    deleteProductSuccess: (id) => ({ type: PRODUCTS.DELETE_PRODUCT_SUCCESS, id }),

    deleteProductError: (payload) => ({ type: PRODUCTS.DELETE_PRODUCT_ERROR, payload }),
};

export { productAction };

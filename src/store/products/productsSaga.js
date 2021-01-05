import { takeLatest, call, put, fork, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { productAction } from './prodctsAction';
import { productsApi } from '../../services/products-api';
import { cartsApi } from '../../services/cart-api';

function* watcherGetProduct() {
  yield takeLatest("GET_PRODUCTS_REQUEST", workerGetProduct);
}

function* workerGetProduct() {
  try {
    const productResponse = yield call(productsApi.getProducts);
    const cartResponse = yield call(cartsApi.getCart);
    const products = productResponse.map(product => {
      return {
        isInCart: cartResponse.find(item => item.productId === product.id) ? true : false,
        ...product
      }
    })
    if (products) yield put(productAction.getProductSuccess(products));
  } catch(error) {
    yield put(productAction.getProductError(error));
  }
}

function* watcherAddProduct() {
  yield takeLatest("ADD_PRODUCT_REQUEST", workerAddProduct);
}

function* workerAddProduct(action) {
  try {
    const response = yield call(productsApi.addProducts, action.payload);
    if (response) {
      yield put(productAction.addProductSuccess(action.payload));
      toast.success('Product added successfully');
    }
  } catch(error) {
    yield put(productAction.addProductError(error));
    toast.error(error.message);
  }
}

function* watcherEditProduct() {
  yield takeLatest("EDIT_PRODUCT_REQUEST", workerEditProduct);
}

function* workerEditProduct(action) {
  try {
    yield call(productsApi.editProduct, action.payload, action.docId);
    yield put(productAction.editProductSuccess(action.payload, action.docId));
    toast.success('Product updated successfully');
  } catch(error) {
    yield put(productAction.editProductError(error));
  }
}

function* watcherSearchProduct() {
  yield takeLatest("SEARCH_PRODUCT_REQUEST", workerSearchProduct);
}

function* workerSearchProduct(action) {
  try {
    const response = yield call(productsApi.searchProduct, action.payload);
    if (response) {
      yield put(productAction.searchProdByKeywordSuccess(response));
    }
  } catch(error) {
    toast.error(error.message);
  }
}

function* watcherDeleteProduct() {
  yield takeLatest("DELETE_PRODUCT_REQUEST", workerDeleteProduct);
}

function* workerDeleteProduct(action) {
  try {
    yield call(productsApi.deleteProduct, action.id);
    yield put(productAction.deleteProductSuccess(action.id));
    toast.success('Product deleted successfully');
  } catch(error) {
    yield put(productAction.deleteProductError(error));
  }
}

export default function* productsSaga() {
  yield all([
    fork(watcherGetProduct),
    fork(watcherAddProduct),
    fork(watcherEditProduct),
    fork(watcherSearchProduct),
    fork(watcherDeleteProduct)
  ])
};

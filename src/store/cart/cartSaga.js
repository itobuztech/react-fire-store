import { takeLatest, call, put, fork, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { cartAction } from './cartAction';
import { cartsApi } from '../../services/cart-api';

function* watcherGetCart() {
  yield takeLatest("GET_CART_REQUEST", workerGetCart);
}

function* workerGetCart() {
  try {
    const response = yield call(cartsApi.getCart);
    if (response) yield put(cartAction.getCartSuccess(response));
  } catch(error) {
    yield put(cartAction.getCartError(error));
  }
}

function* watcherAddCart() {
  yield takeLatest("ADD_TO_CART_REQUEST", workerAddCart);
}

function* workerAddCart(action) {
  try {
    const response = yield call(cartsApi.addToCart, action.payload);
    if (response) {
      yield put(cartAction.addToCartSuccess(action.payload));
      toast.success('Cart added successfully');
    }
  } catch(error) {
    yield put(cartAction.addToCartError(error));
  }
}

function* watcherEditCart() {
  yield takeLatest("EDIT_CART_REQUEST", workerEditCart);
}

function* workerEditCart(action) {
  try {
    yield call(cartsApi.editProductInCart, action.payload, action.docId);
    yield put(cartAction.editCartSuccess(action.payload, action.docId));
    toast.success('Cart updated successfully');
  } catch(error) {
    yield put(cartAction.editCartError(error));
  }
}

function* watcherDeleteCart() {
  yield takeLatest("DELETE_CART_REQUEST", workerDeleteCart);
}

function* workerDeleteCart(action) {
  try {
    yield call(cartsApi.deleteProductFromCart, action.id);
    yield put(cartAction.deleteCartSuccess(action.id));
    toast.success('Cart deleted successfully');
  } catch(error) {
    yield put(cartAction.deleteCartError(error));
  }
}

export default function* productsSaga() {
  yield all([
    fork(watcherGetCart),
    fork(watcherAddCart),
    fork(watcherEditCart),
    fork(watcherDeleteCart)
  ])
};

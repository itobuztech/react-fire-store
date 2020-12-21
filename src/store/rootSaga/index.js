import { all } from "redux-saga/effects";

import authSaga from '../../store/auth/authSaga';
import productsSaga from '../../store/products/productsSaga';
import cartSaga from '../../store/cart/cartSaga';

export default function* rootSaga() {
  yield all([authSaga(), productsSaga(), cartSaga()]);
}

import { all } from "redux-saga/effects";

import authSaga from '../../store/auth/authSaga';
import productsSaga from '../../store/products/productsSaga';

export default function* rootSaga() {
  yield all([authSaga(), productsSaga()]);
}

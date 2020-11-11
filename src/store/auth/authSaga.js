import { takeLeading, takeLatest, call, put, fork, all } from "redux-saga/effects";

import { authAction } from './authAction';
import { authApi } from '../../services/auth-api';

function* watcherLogin() {
  yield takeLatest("LOGIN_USER_REQUEST", workerLogin);
}
function* workerLogin(action) {
  try {
    const response = yield call(authApi.signIn, action.payload);
    console.log({response});
    if (response) return yield put(authAction.loginSuccess(response));
  } catch (error) {
    console.log({error});
    return yield put(authAction.loginError(error));
  }
}

function* watcherRegister() {
  yield takeLatest("REGISTER_USER_REQUEST", workerRegister);
}
function* workerRegister(action) {
  console.log({action});
  try {
    const response = yield call(authApi.signUp, action.payload);
    if (response) return yield put(authAction.registerSuccess(response));
  } catch (error) {
    console.log({error});
    return yield put(authAction.registerError(error));
  }
}

export default function* authSaga() {
  yield all([
    fork(watcherLogin),
    fork(watcherRegister)
  ]);
};

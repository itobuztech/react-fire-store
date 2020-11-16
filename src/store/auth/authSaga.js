import { takeLatest, call, put, fork, all } from "redux-saga/effects";

import { authAction } from './authAction';
import { authApi } from '../../services/auth-api';

function* watcherLogin() {
  yield takeLatest("LOGIN_USER_REQUEST", workerLogin);
}
function* workerLogin(action) {
  try {
    console.log({action});
    const response = yield call(authApi.signIn, action.payload);
    if (response) {
      yield put(action.props.history.push, '/home');
      return yield put(authAction.loginSuccess(response));
    }
  } catch (error) {
    return yield put(authAction.loginError(error));
  }
}

function* watcherRegister() {
  yield takeLatest("REGISTER_USER_REQUEST", workerRegister);
}
function* workerRegister(action) {
  try {
    const response = yield call(authApi.signUp, action.payload);
    if (response) return yield put(authAction.registerSuccess(response));
  } catch (error) {
    return yield put(authAction.registerError(error));
  }
}

function* watcherSignout() {
  yield takeLatest("LOGOUT_USER_REQUEST", wokerSignout);
}
function* wokerSignout(action) {
  console.log({action});
  try {
    const response = yield call([authApi, 'signOut']);
    return yield put(authAction.signoutSuccess(response));
  } catch(error) {
    return yield put(authAction.signoutError(error));
  }
}

export default function* authSaga() {
  yield all([
    fork(watcherLogin),
    fork(watcherRegister),
    fork(watcherSignout)
  ]);
};

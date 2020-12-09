import { takeLatest, call, put, fork, all } from "redux-saga/effects";
import { push } from 'react-router-redux';
import { toast } from 'react-toastify';

import { authAction } from './authAction';
import { authApi } from '../../services/auth-api';
import { redirectTo } from '../../route';

function* watcherLogin() {
  yield takeLatest("LOGIN_USER_REQUEST", workerLogin);
}
function* workerLogin(action) {
  try {
    const response = yield call(authApi.signIn, action.payload);
    if (response) {
      yield put(authAction.loginSuccess(response));
      yield put(push('/home'));
      toast.success('Logged in successfully');
    }
  } catch (error) {
    console.log(error);
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
  try {
    const response = yield call([authApi, 'signOut']);
    yield put(authAction.signoutSuccess(response))
    yield put(push('/login'));
    toast.success('Loggedout successfully');
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

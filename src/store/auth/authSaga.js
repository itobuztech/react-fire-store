import { takeLatest, call, put, fork, all } from "redux-saga/effects";

import { createBrowserHistory } from 'history';
import { toast } from 'react-toastify';

import { authAction } from './authAction';
import { authApi } from '../../services/auth-api';

const history = createBrowserHistory();

function* watcherLogin() {
  yield takeLatest("LOGIN_USER_REQUEST", workerLogin);
}
function* workerLogin(action) {
  try {
    const response = yield call(authApi.signIn, action.payload);
    if (response) {
      yield put(authAction.loginSuccess(response));
      yield call(redirectTo, '/home');
      toast.success('Logged in successfully');
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
  try {
    const response = yield call([authApi, 'signOut']);
    yield put(authAction.signoutSuccess(response))
    yield call(redirectTo, '/login');
    toast.success('Loggedout successfully');
  } catch(error) {
    return yield put(authAction.signoutError(error));
  }
}

function redirectTo(location) {
  history.go(location);
}

export default function* authSaga() {
  yield all([
    fork(watcherLogin),
    fork(watcherRegister),
    fork(watcherSignout)
  ]);
};

import { call, put, takeEvery } from 'redux-saga/effects'
import {requestData, requestDataError, requestDataSuccess, ACTION_TYPES } from './actions';
import { loadCurrencyRate } from '../api';

export function* rootSaga() {
  yield takeEvery(ACTION_TYPES.FETCHED_DATA, fetchDataAsync);
}

function* fetchDataAsync() {
  try {
    yield put(requestData());
    const data = yield call(loadCurrencyRate);
    yield put(requestDataSuccess(data));
  } catch (error) {
    yield put(requestDataError(error.message));
  }
}

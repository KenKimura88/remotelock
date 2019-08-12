import { put, takeLatest, all } from 'redux-saga/effects';
import * as actions from '../actions';
import { baseUrl } from '../const/api';

function* fethcUser() {
  try {
    const json = yield fetch(`${baseUrl}z_users.json`).then(response => {
      return response.json();
    });
    yield put(actions.userReceived(json.data));
  } catch (err) {
    console.log(err);
  }
}

function* fetchDevice() {
  try {
    const json = yield fetch(`${baseUrl}z_devices.json`).then(response => {
      return response.json();
    });
    yield put(actions.deviceReceived(json.data));
  } catch (err) {
    console.log(err);
  }
}

function* actionWatcherDevice() {
  yield takeLatest(actions.GET_DEVICE, fetchDevice);
}

function* actionWatcherUser() {
  yield takeLatest(actions.GET_USER, fethcUser);
}

export default function* rootSaga() {
  yield all([actionWatcherDevice(), actionWatcherUser()]);
}

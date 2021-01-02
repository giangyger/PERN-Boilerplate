import { takeLatest, fork } from "redux-saga/effects";
import * as appActionCreators from "../actionCreators/app";

function* watchCreateApp() {
  yield takeLatest(appActionCreators.CREATE_APP, function* () {});
}
export default [fork(watchCreateApp)];

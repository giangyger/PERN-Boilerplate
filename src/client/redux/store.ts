import { createStore, combineReducers, applyMiddleware } from "redux";
import { all, fork } from "redux-saga/effects";
import appReducer from "./reducers/app";
import createSagaMiddleware from "redux-saga";

import appSaga from "./sagas/app";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ app: appReducer }),
  applyMiddleware(sagaMiddleware)
);

const rootSaga = function* () {
  yield all([...appSaga]);
};

sagaMiddleware.run(rootSaga);

export default store;

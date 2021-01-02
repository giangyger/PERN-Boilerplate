import { createStore, combineReducers, applyMiddleware } from "redux";
import { all, fork } from "redux-saga/effects";
import appReducer from "./reducers/app";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ app: appReducer }),
  applyMiddleware(sagaMiddleware)
);

const rootSaga = function* () {
  yield all([]);
};

sagaMiddleware.run(rootSaga);

export default store;

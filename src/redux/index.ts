import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

export const store = createStore(reducer, composeWithDevTools(enhancer));

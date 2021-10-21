import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, composeWithDevTools(enhancer));

sagaMiddleware.run(rootSaga);

export { store };

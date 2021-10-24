import { fork } from "redux-saga/effects";
import { watchLoadPeopleSaga } from "./people/watchLoadPeopleSaga";

export function* rootSaga() {
  yield fork(watchLoadPeopleSaga);
}

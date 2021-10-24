import { takeEvery } from "redux-saga/effects";

import { dispatchType, type } from "../../../hooks/use-dispatch-load-people";
import { workerSaga } from "./workerSaga";

export function* watchLoadPeopleSaga() {
  yield takeEvery<dispatchType>(type, workerSaga);
}

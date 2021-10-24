import { takeEvery } from "redux-saga/effects";
import { dispatchType, type } from "../../../hooks/use-dispatch-load-all-data";

import { workerSaga } from "./workerSaga";

export function* watchLoadAllData() {
  yield takeEvery<dispatchType>(type, workerSaga);
}

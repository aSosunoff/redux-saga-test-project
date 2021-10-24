import { takeEvery } from "redux-saga/effects";
import { dispatchType, type } from "../../../hooks/use-dispatch-load-all-data";

import { workerLoadAllSaga } from "./workerLoadAllSaga";

export function* watchLoadAllData() {
  yield takeEvery<dispatchType>(type, workerLoadAllSaga);
}

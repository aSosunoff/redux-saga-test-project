import { takeEvery } from "redux-saga/effects";

import { dispatchType, type } from "../../../hooks/use-dispatch-load-planets";
import { workerSaga } from "./workerSaga";

export function* watchLoadPlanetsSaga() {
  yield takeEvery<dispatchType>(type, workerSaga);
}

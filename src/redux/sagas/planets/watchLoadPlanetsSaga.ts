import { takeEvery } from "redux-saga/effects";

import { dispatchType, type } from "../../../hooks/use-dispatch-load-planets";
import { workerLoadPlanetsSaga } from "./workerLoadPlanetsSaga";

export function* watchLoadPlanetsSaga() {
  yield takeEvery<dispatchType>(type, workerLoadPlanetsSaga);
}

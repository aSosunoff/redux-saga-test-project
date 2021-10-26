import { takeEvery } from "redux-saga/effects";

import { dispatchType, type } from "../../../hooks/use-dispatch-load-starships";
import { loadStarshipData } from "./loadStarshipData";

export function* watchStarshipLoadSaga() {
  yield takeEvery<dispatchType>(type, loadStarshipData);
}

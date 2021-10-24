import { takeEvery } from "redux-saga/effects";

import { dispatchType, type } from "../../../hooks/use-dispatch-load-people";
import { workeLoadPeopleSaga } from "./workeLoadPeopleSaga";

export function* watchLoadPeopleSaga() {
  yield takeEvery<dispatchType>(type, workeLoadPeopleSaga);
}

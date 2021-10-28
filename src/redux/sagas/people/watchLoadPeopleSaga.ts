import { dispatchType, type } from "../../../hooks/use-dispatch-load-people";
import { takeLatestAbort } from "../effectHelper/takeLatestAbort";
import { workeLoadPeopleSaga } from "./workeLoadPeopleSaga";

export function* watchLoadPeopleSaga() {
  yield takeLatestAbort<dispatchType>(type, workeLoadPeopleSaga);
}

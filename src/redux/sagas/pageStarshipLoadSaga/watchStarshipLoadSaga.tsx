import { dispatchType, type } from "../../../hooks/use-dispatch-load-starships";
import { takeLatestAbort } from "../effectHelper/takeLatestAbort";
import { loadStarshipData } from "./loadStarshipData";

export function* watchStarshipLoadSaga() {
  yield takeLatestAbort<dispatchType>(type, loadStarshipData);
}

import { take, fork } from "redux-saga/effects";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { loadStarshipData } from "./loadStarshipData";

export function* pageStarshipLoadSaga() {
  while (true) {
    const action: LocationChangeAction = yield take(LOCATION_CHANGE);

    if (action.payload.location.pathname.endsWith("starships")) {
      yield fork(loadStarshipData);
    }
  }
}

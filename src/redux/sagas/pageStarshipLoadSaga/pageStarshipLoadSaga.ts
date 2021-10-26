import { take, TakeEffect, fork, ForkEffect } from "redux-saga/effects";
import { LOCATION_CHANGE, LocationChangeAction } from "connected-react-router";
import { loadStarshipData } from "./loadStarshipData";

export function* pageStarshipLoadSaga(): Generator<
  TakeEffect | ForkEffect,
  void,
  LocationChangeAction
> {
  while (true) {
    const action = yield take(LOCATION_CHANGE);

    if (action.payload.location.pathname === "/starships") {
      yield fork(loadStarshipData);
    }
  }
}

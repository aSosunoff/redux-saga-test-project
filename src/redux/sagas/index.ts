import { fork } from "redux-saga/effects";
import { watchLoadAllData } from "./allData/watchLoadAllData";
import { watchLoadPeopleSaga } from "./people/watchLoadPeopleSaga";
import { watchLoadPlanetsSaga } from "./planets/watchLoadPlanetsSaga";

export function* rootSaga() {
  yield fork(watchLoadPeopleSaga);

  yield fork(watchLoadPlanetsSaga);

  yield fork(watchLoadAllData);
}

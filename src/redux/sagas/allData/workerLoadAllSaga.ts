import { fork } from "redux-saga/effects";
import { workeLoadPeopleSaga } from "../people/workeLoadPeopleSaga";
import { workerLoadPlanetsSaga } from "../planets/workerLoadPlanetsSaga";

export function* workerLoadAllSaga() {
  yield fork(workeLoadPeopleSaga);

  yield fork(workerLoadPlanetsSaga);
}

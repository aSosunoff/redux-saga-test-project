import { spawn, call, all } from "redux-saga/effects";
import { watchLoadAllData } from "./allData/watchLoadAllData";
import { pageStarshipLoadSaga } from "./pageStarshipLoadSaga/pageStarshipLoadSaga";
import { watchStarshipLoadSaga } from "./pageStarshipLoadSaga/watchStarshipLoadSaga";
import { watchLoadPeopleSaga } from "./people/watchLoadPeopleSaga";
import { watchLoadPlanetsSaga } from "./planets/watchLoadPlanetsSaga";

export function* rootSaga() {
  /* yield spawn(watchLoadPeopleSaga);

  yield spawn(watchLoadPlanetsSaga);

  yield spawn(watchLoadAllData); */

  const sagas = [
    watchLoadPeopleSaga,
    watchLoadPlanetsSaga,
    watchLoadAllData,
    pageStarshipLoadSaga,
    watchStarshipLoadSaga,
  ];

  const retrySagas = sagas.map((saga) =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (error: any) {
          console.log(error);
        }
      }
    })
  );

  yield all(retrySagas);
}

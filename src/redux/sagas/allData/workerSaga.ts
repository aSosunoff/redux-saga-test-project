import { fork } from "redux-saga/effects";
import { loadPeople } from "../people/loadPeople";
import { loadPlanets } from "../planets/loadPlanets";

export function* workerSaga() {
  yield fork(loadPeople);
  yield fork(loadPlanets);
}

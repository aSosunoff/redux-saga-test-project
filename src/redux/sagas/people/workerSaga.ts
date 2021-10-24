import { put, call, PutEffect, CallEffect, fork } from "redux-saga/effects";
import { Person } from "../../../interfaces/person";
import { Planet } from "../../../interfaces/planet";
import { SWAPIService } from "../../../services/SWAPIService";
import { ActionSetPeople, ActionSetPlanet } from "../../reducers";

export function* loadPeople(): Generator<
  CallEffect<Person[]> | PutEffect<ActionSetPeople>,
  void,
  Person[]
> {
  const persons = yield call(SWAPIService.getPersons);

  yield put<ActionSetPeople>({
    type: "SET_PEOPLE",
    payload: persons as Person[],
  });
}

export function* loadPlanets(): Generator<
  CallEffect<Planet[]> | PutEffect<ActionSetPlanet>,
  void,
  Planet[]
> {
  const planets = yield call(SWAPIService.getPlanets);

  yield put<ActionSetPlanet>({
    type: "SET_PLANETS",
    payload: planets as Planet[],
  });
}

export function* workerSaga() {
  yield fork(loadPeople);
  yield fork(loadPlanets);
}

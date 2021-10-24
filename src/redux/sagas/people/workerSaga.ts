import { put, call, PutEffect, CallEffect } from "redux-saga/effects";
import { Person } from "../../../interfaces/person";
import { Planet } from "../../../interfaces/planet";
import { SWAPIService } from "../../../services/SWAPIService";
import { ActionSetPeople, ActionSetPlanet } from "../../reducers";

export function* workerSaga(): Generator<
  | CallEffect<Person[]>
  | CallEffect<Planet[]>
  | PutEffect<ActionSetPeople>
  | PutEffect<ActionSetPlanet>,
  void,
  Person[] | Planet[]
> {
  const persons = yield call(SWAPIService.getPersons);

  console.log(persons);

  const planets = yield call(SWAPIService.getPlanets);

  console.log(planets);

  yield put<ActionSetPeople>({
    type: "SET_PEOPLE",
    payload: persons as Person[],
  });

  yield put<ActionSetPlanet>({
    type: "SET_PLANETS",
    payload: planets as Planet[],
  });
}

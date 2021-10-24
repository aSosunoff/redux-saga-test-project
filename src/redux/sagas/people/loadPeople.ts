import { put, call, PutEffect, CallEffect } from "redux-saga/effects";
import { Person } from "../../../interfaces/person";
import { SWAPIService } from "../../../services/SWAPIService";
import { ActionSetPeople } from "../../reducers";

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

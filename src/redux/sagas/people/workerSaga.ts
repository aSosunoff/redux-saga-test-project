import { put, call, PutEffect, CallEffect } from "redux-saga/effects";
import { getPeopleService } from "../../../services/getPeopleService";
import { ActionSetPeople } from "../../reducers";
import { Person } from "./interfaces";

export function* workerSaga(): Generator<
  CallEffect<Person[]> | PutEffect<ActionSetPeople>,
  void,
  Person[]
> {
  const data = yield call(getPeopleService);

  yield put<ActionSetPeople>({ type: "SET_PEOPLE", payload: data });
}

import { put, call, PutEffect, CallEffect } from "redux-saga/effects";
import { SWAPIService } from "../../../services/SWAPIService";
import { ActionSetPeople } from "../../reducers";
import { Person } from "./interfaces";

export function* workerSaga(): Generator<
  CallEffect<Person[]> | PutEffect<ActionSetPeople>,
  void,
  Person[]
> {
  const payload = yield call(SWAPIService.getPerson);

  yield put<ActionSetPeople>({ type: "SET_PEOPLE", payload });
}

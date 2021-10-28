import { put, call } from "redux-saga/effects";
import { Person } from "../../../interfaces/person";
import { SWAPIService } from "../../../services/SWAPIService";
import { ActionSetPeople } from "../../reducers/appReducer";

export function* workeLoadPeopleSaga(signal?: RequestInit["signal"]) {
  const persons: Person[] = yield call(SWAPIService.getPersons, { signal });

  yield put<ActionSetPeople>({
    type: "SET_PEOPLE",
    payload: persons,
  });
}

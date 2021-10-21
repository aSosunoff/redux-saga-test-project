import {
  takeEvery,
  put,
  call,
  PutEffect,
  CallEffect,
} from "redux-saga/effects";
import { dispatchType } from "../../app";
import { ActionSetPeople } from "../reducers";

const wait = (delay: number = 0) =>
  new Promise<void>((res) => {
    setTimeout(res, delay);
  });

export type PersonType = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
};

const getPeople = async () => {
  const request = await fetch("https://swapi.dev/api/people/");

  const data = await request.json();

  const { results } = data as {
    results: PersonType[];
  };

  return results;
};

export function* workerSaga(): Generator<
  CallEffect<PersonType[]> | Promise<void> | PutEffect<ActionSetPeople>,
  void,
  PersonType[]
> {
  const data = yield call(getPeople);

  yield wait(2000);

  yield put<ActionSetPeople>({ type: "SET_PEOPLE", payload: data });
}

export function* watchClickSaga() {
  yield takeEvery<dispatchType>("LOAD_PEOPLE", workerSaga);
}

export function* rootSaga() {
  yield watchClickSaga();
}

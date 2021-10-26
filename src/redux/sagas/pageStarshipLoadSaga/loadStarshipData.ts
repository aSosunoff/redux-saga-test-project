import { Starship } from "./../../../interfaces/starship";
import { call, put } from "redux-saga/effects";
import { ActionSetStarship } from "../../reducers/appReducer";

export function* loadStarshipData(): Generator<any, any, any> {
  const request = yield call(fetch, "https://swapi.dev/api/starships/");

  const { results } = yield call([request, request.json]);

  yield put<ActionSetStarship>({
    type: "SET_STARSHIP",
    payload: results as Starship[],
  });
}

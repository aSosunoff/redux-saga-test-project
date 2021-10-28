import { Starship } from "./../../../interfaces/starship";
import { call, put } from "redux-saga/effects";
import { ActionSetStarship } from "../../reducers/appReducer";

export function* loadStarshipData(signal?: RequestInit["signal"]) {
  const request: Response = yield call(
    fetch,
    "https://swapi.dev/api/starships/",
    { signal }
  );

  const { results }: { results: Starship[] } = yield call([
    request,
    request.json,
  ]);

  yield put<ActionSetStarship>({
    type: "SET_STARSHIP",
    payload: results,
  });
}

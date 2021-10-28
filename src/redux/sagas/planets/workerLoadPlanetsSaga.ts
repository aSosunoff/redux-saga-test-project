import { put, call } from "redux-saga/effects";
import { Planet } from "../../../interfaces/planet";
import { SWAPIService } from "../../../services/SWAPIService";
import { ActionSetPlanet } from "../../reducers/appReducer";

export function* workerLoadPlanetsSaga() {
  const planets: Planet[] = yield call(SWAPIService.getPlanets);

  yield put<ActionSetPlanet>({
    type: "SET_PLANETS",
    payload: planets as Planet[],
  });
}

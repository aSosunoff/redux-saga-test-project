import { loadPlanets } from "./loadPlanets";

export function* workerSaga() {
  yield loadPlanets();
}

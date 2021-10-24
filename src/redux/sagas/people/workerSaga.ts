import { loadPeople } from "./loadPeople";

export function* workerSaga() {
  yield loadPeople();
}

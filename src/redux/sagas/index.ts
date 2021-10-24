import { watchLoadPeopleSaga } from "./people/watchLoadPeopleSaga";

export function* rootSaga() {
  yield watchLoadPeopleSaga();
}

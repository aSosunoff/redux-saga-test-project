import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";

import { appReducer } from "./appReducer";

export const createRootReducer = (history: History) =>
  combineReducers({
    app: appReducer,
    router: connectRouter(history),
  });

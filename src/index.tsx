import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
/* import { Router } from "react-router"; */
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import { App } from "./app";
import { configureStore } from "./redux";
import { Blog } from "./feature/Blog";
import { NotFound } from "./feature/NotFound";

export const history = createBrowserHistory();

const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

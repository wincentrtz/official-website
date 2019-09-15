import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "store";

require("mocks");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/:page?" exact component={App} />
      <Route path="/" render={() => <Redirect to="/home" />} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

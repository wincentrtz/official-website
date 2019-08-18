import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import { GlobalStyle } from "./style";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route path="" component={Home} />
      </Switch>
    </Fragment>
  );
};

export default App;

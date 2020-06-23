import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import App from "./App";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/hello" exact component={() => <h1>Hello world</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

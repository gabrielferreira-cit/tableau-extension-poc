import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Init from "./pages/Init";
import Update from "./pages/Update";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename="tableau-extension-poc">
        <Switch>
          <Route exact path="/">
            <Init />
          </Route>
          <Route exact path="/update">
            <Update />
          </Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

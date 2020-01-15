import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Grid from "./Components/Grid";

import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/unicode-grid">
          <Grid unicode={true} gridItemCount={231} />
        </Route>
        <Route path="/dense-grid">
          <Grid gridItemCount={60} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

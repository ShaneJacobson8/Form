import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Form from "./components/Form";
import People from "./components/People";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route path="/Form" component={Form} />
        <Route path="/People" component={People} />
      </Switch>
    </Router>
  );
}

export default Routing;

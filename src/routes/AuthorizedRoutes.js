import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";
import Home from "../pages/home/Home";

const UnAuthorizedRoutes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home
            authorized={props.authorized}
            setAuthorized={props.setAuthorized}
          />
        </Route>
        <Route exact path="/*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
};

export default UnAuthorizedRoutes;

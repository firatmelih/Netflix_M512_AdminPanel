import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";
import Login from "../pages/login/Login";

const UnAuthorizedRoutes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login
            authorized={props.authorized}
            setAuthorized={props.setAuthorized}
          />
        </Route>
        <Route exact path="/*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};

export default UnAuthorizedRoutes;

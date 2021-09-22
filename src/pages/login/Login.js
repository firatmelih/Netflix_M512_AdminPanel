import { TextField } from "@material-ui/core";
import React from "react";
import "../../styles/pages/login/login.scss";

const Login = () => {
  return (
    <div className="Login">
      <div className="login-form">
        <h1>Netflix M512 Admin Panel</h1>
        <div className="upper">
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
          />
        </div>
        <div className="lower">
          <a>Go to Netflix</a>
          <a>Help</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

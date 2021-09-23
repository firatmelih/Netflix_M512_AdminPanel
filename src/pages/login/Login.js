import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom"; // add this import
import "../../styles/pages/login/login.scss";

import Home from "../home/Home";

const Login = (props) => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("auth", true);
    window.location.reload();
  };
  return (
    <div className="Login">
      <div className="login-form">
        <h1> M512 Admin </h1>
        <div className="upper">
          <TextField
            id="outlined-basic 1"
            onChange={handleOnChange}
            name="username"
            value={input.username}
            label="Username"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            onChange={handleOnChange}
            name="password"
            value={input.password}
            type="password"
            label="Password"
            variant="outlined"
          />
          <Button
            onClick={(e) => {
              handleLogin(e);
            }}
            variant="contained"
          >
            Login
          </Button>
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

import { Button } from "@material-ui/core";
import React from "react";
import { Redirect } from "react-router";

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };
  return (
    <div>
      <Button
        onClick={handleLogout}
        style={{ background: "red", color: "white" }}
      >
        Log Out
      </Button>
    </div>
  );
};

export default Home;

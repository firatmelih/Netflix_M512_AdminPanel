import React, { useState } from "react";
import UnAuthorizedRoutes from "./routes/UnAuthorizedRoutes";
import AuthorizedRoutes from "./routes/AuthorizedRoutes";

const App = () => {
  const [authorized, setAuthorized] = useState(
    localStorage.getItem("auth") || false
  );
  console.log(authorized);
  return (
    <>
      {authorized ? (
        <AuthorizedRoutes
          authorized={authorized}
          setAuthorized={setAuthorized}
        />
      ) : (
        <UnAuthorizedRoutes
          authorized={authorized}
          setAuthorized={setAuthorized}
        />
      )}
    </>
  );
};

export default App;

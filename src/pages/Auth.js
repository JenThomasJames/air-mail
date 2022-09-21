import { Fragment } from "react";
import { useState } from "react";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
const Auth = () => {
  const [registerMode, setRegisterMode] = useState(true);
  return (
    <Fragment>
      {registerMode && <Register changeRegisterMode={setRegisterMode} />}
      {!registerMode && <Login changeRegisterMode={setRegisterMode} />}
    </Fragment>
  );
};
export default Auth;

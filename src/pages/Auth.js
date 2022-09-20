import { Fragment } from "react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
const Auth = () => {
  const registerMode = true;
  return (
    <Fragment>
      {!registerMode && <Login />}
      {registerMode && <Register />}
    </Fragment>
  );
};
export default Auth;

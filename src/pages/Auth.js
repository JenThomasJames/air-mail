import { Fragment } from "react";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
const Auth = (props) => {
  return (
    <Fragment>
      {props.authMode && <Register changeAuthMode={props.setAuthMode} />}
      {!props.authMode && <Login changeAuthMode={props.setAuthMode} />}
    </Fragment>
  );
};
export default Auth;

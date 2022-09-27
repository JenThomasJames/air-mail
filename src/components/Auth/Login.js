import styles from "./Login.module.css";
import Card from "../Card";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  //method to handle login event
  const loginHandler = async (event) => {
    event.preventDefault();
    if (validateCredentials()) {
      return;
    }
    const httpConfig = {
      endpoint: "http://localhost:8080/api/user/authenticate",
      method: "GET",
      headers: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    };
    try {
      const response = await fireRequest(httpConfig);
      if (response.error) {
        throw new Error(response.message);
      }
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("loggedInUserId", emailRef.current.value);
      navigate("/inbox");
    } catch (error) {
      alert("Login Failed! Please check your credentials");
    }
  };

  //method to validate user credentials
  const validateCredentials = () => {
    if (emailRef.current.value === "") {
      alert("Please enter your email!");
      return false;
    }
    if (passwordRef.current.value === "") {
      alert("Please enter your password!");
      return false;
    }
  };

  //method to change the auth mode from login mode to register mode
  const signUpHandler = () => {
    props.changeAuthMode(true);
  };

  //method to fire the login request to firebae
  const fireRequest = async (config) => {
    const response = await fetch(config.endpoint, {
      method: config.method,
      headers: config.headers,
    });
    const data = await response.json();
    return data;
  };

  return (
    <Card>
      <div className={styles["card-header"]}>
        <h4 className="muted-title">Login!</h4>
      </div>
      <div className={styles["card-body"]}>
        <form onSubmit={loginHandler} method="GET">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
            ref={emailRef}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            ref={passwordRef}
          />
          <div className="center">
            <p className="auth-change-prompt">
              New here? Let's{" "}
              <button className="link" onClick={signUpHandler}>
                Sign Up!
              </button>
            </p>
          </div>
          <input className="brand-btn" type="submit" value="Login" />
        </form>
      </div>
    </Card>
  );
};
export default Login;

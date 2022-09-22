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
      endpoint:
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGYZl8BfGbOUSuN3M_OTKNKH_QD7DO47g",
      method: "POST",
      body: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    };
    const data = await fireRequest(httpConfig);
    localStorage.setItem("idToken", await data.idToken);
    localStorage.setItem("isLoggedIn", true);
    navigate("/inbox");
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
    try {
      const response = await fetch(config.endpoint, {
        body: JSON.stringify(config.body),
        method: config.method,
      });
      const data = await response.json();
      if (await data.error) {
        throw new Error(data.error.message);
      }
      return data;
    } catch (error) {
      if (error.message.includes("EMAIL_NOT_FOUND")) {
        alert("User not found!");
      } else if (error.message.includes("INVALID_PASSWORD")) {
        alert("Invalid password. Please try again");
      } else if (error.message.includes("MISSING_PASSWORD")) {
        alert("Enter your password");
      } else if (error.message.includes("INVALID_EMAIL")) {
        alert("Enter a valid email");
      } else {
        alert("An unknown error occured!");
      }
    }
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
          <input className={styles["submit-btn"]} type="submit" value="Login" />
        </form>
      </div>
    </Card>
  );
};
export default Login;

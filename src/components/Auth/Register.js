import Card from "../Card";
import styles from "./Register.module.css";
import useInput from "../../hooks/use-input";
const Register = (props) => {
  const errorText = <p className="error-text">This field is mandatory!</p>;
  const passwordErrorText = (
    <p className="error-text">Password must at least be 8 charecters long!</p>
  );
  const {
    enteredValue: enteredFirstName,
    inputChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    resetInput: resetFnameHandler,
    isInputInvalid: isFnameInvalid,
    isValid: isFnameValid,
  } = useInput((value) => {
    return value !== "";
  });

  const {
    enteredValue: enteredLastName,
    inputChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    resetInput: resetLnameHandler,
    isInputInvalid: isLnameInvalid,
    isValid: isLnameValid,
  } = useInput((value) => {
    return value !== "";
  });

  const {
    enteredValue: enteredEmail,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmailHandler,
    isInputInvalid: isEmailInvalid,
    isValid: isEmailValid,
  } = useInput((value) => {
    return value !== "";
  });

  const {
    enteredValue: enteredPassword,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetInput: resetPasswordHandler,
    isInputInvalid: isPasswordInvalid,
    isValid: isPasswordValid,
  } = useInput((value) => {
    return value.length <= 7;
  });

  const {
    enteredValue: enteredRepeatPassword,
    inputChangeHandler: repeatPasswordChangeHandler,
    inputBlurHandler: repeatPasswordBlurHandler,
    resetInput: resetRepeatPasswordHandler,
    isInputInvalid: isRepeatPasswordInvalid,
    isValid: isRepeatPasswordValid,
  } = useInput((value) => {
    return value !== "";
  });

  const isFormInvalid =
    !isFnameValid ||
    !isLnameValid ||
    !isEmailValid ||
    !isPasswordValid ||
    !isRepeatPasswordValid;

  //Handler for register from submission
  const registerHandler = async (event) => {
    event.preventDefault();
    if (enteredPassword !== enteredRepeatPassword || isFormInvalid) return;
    const httpConfig = {
      endpoint:
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGYZl8BfGbOUSuN3M_OTKNKH_QD7DO47g",
      method: "POST",
      body: {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      },
    };
    try {
      const data = await fireRequest(httpConfig);
      if (data.error) {
        const error = data.error.message
          ? data.error.message
          : "Authentication failed!";
        throw new Error(error);
      }
      alert("Registration successful! Login to continue.");
      props.changeAuthMode(false);
    } catch (err) {
      alert(err.message);
    }
  };

  //method to an API Request
  const fireRequest = async (config) => {
    const response = await fetch(config.endpoint, {
      method: config.method ? config.method : "GET",
      body: config.body ? JSON.stringify(config.body) : {},
    });
    const data = await response.json();
    return data;
  };

  //method to change register mode to login mode
  const loginHandler = () => {
    props.changeAuthMode(false);
  };

  const fnameStyle = isFnameInvalid ? "error-input" : "valid-input";
  const lnameStyle = isLnameInvalid ? "error-input" : "valid-input";
  const emailStyle = isEmailInvalid ? "error-input" : "valid-input";
  const passwordStyle = isPasswordInvalid ? "error-input" : "valid-input";
  const repeatPasswordStyle = isRepeatPasswordInvalid
    ? "error-input"
    : "valid-input";

  return (
    <Card>
      <div className={styles["card-header"]}>
        <h4 className="muted-title">Hey There!</h4>
      </div>
      <div className={styles["card-body"]}>
        <form onSubmit={registerHandler} method="GET">
          <div className={styles["row-group"]}>
            <div className={styles["col-group"]}>
              <input
                type="text"
                name="fname"
                id="fname"
                placeholder="Enter First Name"
                onBlur={fnameBlurHandler}
                onChange={fnameChangeHandler}
                value={enteredFirstName}
                className={styles[fnameStyle]}
              />
              {isFnameInvalid && errorText}
            </div>
            <div className={styles["col-group"]}>
              <input
                type="text"
                name="lname"
                id="lname"
                placeholder="Enter Last Name"
                onBlur={lnameBlurHandler}
                onChange={lnameChangeHandler}
                value={enteredLastName}
                className={styles[lnameStyle]}
              />
              {isLnameInvalid && errorText}
            </div>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            value={enteredEmail}
            className={styles[emailStyle]}
          />
          {isEmailInvalid && errorText}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            onBlur={passwordBlurHandler}
            onChange={passwordChangeHandler}
            value={enteredPassword}
            className={styles[passwordStyle]}
          />
          {isPasswordInvalid && passwordErrorText}
          <input
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="Repeat password"
            onBlur={repeatPasswordBlurHandler}
            onChange={repeatPasswordChangeHandler}
            value={enteredRepeatPassword}
            className={styles[repeatPasswordStyle]}
          />
          {isRepeatPasswordInvalid && passwordErrorText}
          <div className="center">
            <p className="auth-change-prompt">
              Already have an account? Let's{" "}
              <button className="link" onClick={loginHandler}>
                Login
              </button>
            </p>
          </div>
          <input
            className={styles["submit-btn"]}
            type="submit"
            value="Sign up!"
          />
        </form>
      </div>
    </Card>
  );
};
export default Register;

import Card from "../Card";
import styles from "./Register.module.css";
import useInput from "../../hooks/use-input";
const Register = () => {
  const errorText = <p className="error-text">This field is mandatory!</p>;

  const {
    enteredValue: enteredFirstName,
    inputChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    resetInput: resetFnameHandler,
    isInputInvalid: isFnameInvalid,
  } = useInput((value) => {
    return value !== "";
  });

  const {
    enteredValue: enteredLastName,
    inputChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    resetInput: resetLnameHandler,
    isInputInvalid: isLnameInvalid,
  } = useInput((value) => {
    return value !== "";
  });

  const {
    enteredValue: enteredEmail,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmailHandler,
    isInputInvalid: isEmailInvalid,
  } = useInput((value) => {
    return value !== "";
  });

  const {
    enteredValue: enteredPassword,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetInput: resetPasswordHandler,
    isInputInvalid: isPasswordInvalid,
  } = useInput((value) => {
    return value !== "";
  });

  const {
    enteredValue: enteredRepeatPassword,
    inputChangeHandler: repeatPasswordChangeHandler,
    inputBlurHandler: repeatPasswordBlurHandler,
    resetInput: resetRepeatPasswordHandler,
    isInputInvalid: isRepeatPasswordInvalid,
  } = useInput((value) => {
    return value !== "";
  });

  //Handler for register from submission
  const registerHandler = (event) => {
    event.preventDefault();
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
        <h4>Hey There!</h4>
      </div>
      <div className={styles["card-body"]}>
        <form onSubmit={registerHandler}>
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
          {isPasswordInvalid && errorText}
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
          {isRepeatPasswordInvalid && errorText}
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

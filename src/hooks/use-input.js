import { useState } from "react";

const useInput = (validateInput) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const isValid = enteredValue !== "";
  const isInputInvalid = !isValid && isInputTouched;

  const inputBlurHandler = () => {
    setIsInputTouched(true);
  };

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsInputTouched(true);
  };

  const resetInput = () => {
    setEnteredValue("");
    setIsInputTouched(false);
  };

  validateInput(enteredValue);

  return {
    enteredValue,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
    isInputInvalid,
    isValid,
  };
};
export default useInput;

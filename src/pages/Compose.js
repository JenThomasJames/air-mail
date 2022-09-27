import Card from "../components/Card";
import useInput from "../hooks/use-input";

const Compose = () => {
  const {
    enteredValue: enteredReceiver,
    inputChangeHandler: receiverChangeHandler,
    inputBlurHandler: receiverBlurHandler,
    resetInput: resetReceiver,
    isInputInvalid: isReceiverInvalid,
    isValid: isReceiverValid,
  } = useInput((value) => {
    return value !== "";
  });

  const {
    enteredValue: enteredSubject,
    inputChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    resetInput: resetSubject,
    isInputInvalid: isSubjectInvalid,
    isValid: isSubjectValid,
  } = useInput((value) => {
    return value !== "";
  });

  const {
    enteredValue: enteredBody,
    inputChangeHandler: bodyChangeHandler,
    inputBlurHandler: bodyBlurHandler,
    resetInput: resetBody,
    isInputInvalid: isBodyInvalid,
    isValid: isBodyValid,
  } = useInput((value) => {
    return value !== "";
  });

  const mailSendHandler = (event) => {
    event.preventDefault();

    //TODO: Send new Mail functionality
    const response = sendMail();
    verifyData(response);

    resetReceiver();
    resetSubject();
    resetBody();
  };

  //Http trigger for sending a mail
  const sendMail = async () => {
    const sender = localStorage.getItem("loggedInUserId");
    const response = await fetch("http://localhost:8080/api/mail/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        sender: sender,
        receiver: enteredReceiver,
      },
      body: JSON.stringify({
        subject: enteredSubject,
        body: enteredBody,
      }),
    });
    const data = await response.json();
    return data;
  };

  //method to verify the data receiver after http call
  const verifyData = (data) => {
    if (data.isError) {
      alert("Something went wrong");
      return;
    } else {
      alert("Mail send!");
    }
  };

  return (
    <div style={{ margin: 20 }}>
      <p className="page-title">New Mail</p>
      <Card>
        <form onSubmit={mailSendHandler}>
          <input
            type="text"
            name="to"
            id="to"
            placeholder="To"
            onChange={receiverChangeHandler}
            onBlur={receiverBlurHandler}
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            onChange={subjectChangeHandler}
            onBlur={subjectBlurHandler}
          />
          <textarea
            name="matter"
            id="matter"
            cols="30"
            rows="10"
            placeholder="Enter Body"
            onChange={bodyChangeHandler}
            onBlur={bodyBlurHandler}
          ></textarea>
          <input className="brand-btn" type="submit" value="Send" />
        </form>
      </Card>
    </div>
  );
};
export default Compose;

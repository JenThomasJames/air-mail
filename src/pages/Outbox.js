import Card from "../components/Card";
import Mail from "../components/Inbox/Mail";
import { useEffect, useState } from "react";

const Outbox = () => {
  const [mails, setMails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //method to get all the sent mails for a given user
  const getAllSentMails = async () => {
    setIsLoading(true);
    const response = await fetch(
      "http://localhost:8080/api/mail/sent/" +
        localStorage.getItem("loggedInUserId")
    );
    const data = await response.json();
    setMails(data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllSentMails();
  }, []);

  //removes a mail from the state once it is removed or unarchived
  const removeMailFromState = (mailId) => {
    const newMails = [...mails];
    const updatedMails = newMails.filter((mail) => mailId !== mail.mailId);
    setMails(updatedMails);
  };
  return (
    <div style={{ margin: 20 }}>
      <p className="page-title">Sent Items</p>
      {!isLoading && mails.length > 0 && (
        <Card>
          {mails.map((mail) => (
            <Mail
              key={mail.mailId}
              removeMailFromState={removeMailFromState}
              data={mail}
              isSentMails={true}
            />
          ))}
        </Card>
      )}
      {mails.length === 0 && (
        <Card>
          <p style={{ color: "#000" }}>No mails found!</p>
        </Card>
      )}
    </div>
  );
};
export default Outbox;

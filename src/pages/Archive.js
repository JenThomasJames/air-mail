import { useState, useEffect } from "react";
import Card from "../components/Card";
import Mail from "../components/Inbox/Mail";

const Archive = () => {
  const [mails, setMails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //method to get all the archived mails for a given user
  const getAllArchivedMails = async () => {
    setIsLoading(true);
    const response = await fetch(
      "http://localhost:8080/api/mail/archive/" +
        localStorage.getItem("loggedInUserId")
    );
    const data = await response.json();
    setMails(data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllArchivedMails();
  }, []);

  //removes a mail from the state once it is removed or unarchived
  const removeMailFromState = (mailId) => {
    const newMails = [...mails];
    const updatedMails = newMails.filter((mail) => mailId !== mail.mailId);
    setMails(updatedMails);
  };

  return (
    <div style={{ margin: 20 }}>
      <p className="page-title">Archived</p>
      {!isLoading && mails.length > 0 && (
        <Card>
          {mails.map((mail) => (
            <Mail
              key={mail.mailId}
              removeMailFromState={removeMailFromState}
              data={mail}
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
export default Archive;

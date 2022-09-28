import Card from "../components/Card";
import Mail from "../components/Inbox/Mail";
import { useEffect, useState } from "react";
const Inbox = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mails, setMails] = useState([]);
  const getMailsForInbox = async () => {
    getAllMailsForUser(localStorage.getItem("loggedInUserId"));
  };
  useEffect(() => {
    getMailsForInbox();
  }, []);

  const getAllMailsForUser = async (email) => {
    setIsLoading(true);
    const response = await fetch("http://localhost:8080/api/mail/" + email);
    const data = await response.json();
    setMails(data.data);
    setIsLoading(false);
  };

  const deleteMail = (mailId) => {
    const newMails = [...mails];
    const updatedMails = newMails.filter((mail) => mailId !== mail.mailId);
    setMails(updatedMails);
  };

  return (
    <div style={{ margin: 20 }}>
      <p className="page-title">Inbox</p>
      {!isLoading && mails.length > 0 && (
        <Card>
          {mails.map((mail) => (
            <Mail key={mail.mailId} deleteMail={deleteMail} data={mail} />
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
export default Inbox;

import dummyMails from "../dummy/mails";
import Card from "../components/Card";
import Mail from "../components/Inbox/Mail";
import { useState } from "react";
const Inbox = () => {
  const [mails, setMails] = useState(dummyMails);

  //method to delete or archive a mail
  const deleteMail = (mail, isDelete) => {
    let modifiedMails = [];
    if (isDelete) {
      mails.forEach((i) => {
        if (i.id !== mail.id) {
          modifiedMails.push(i);
        }
      });
      setMails(modifiedMails);
    } else {
      modifiedMails = [...mails];
      let indexOfMail = modifiedMails.findIndex(
        (element) => element.id === mail.id
      );
      modifiedMails[indexOfMail].visible = false;
      setMails(modifiedMails);
    }
  };

  return (
    <div style={{ margin: 20 }}>
      <p className="page-title">Inbox</p>
      <Card>
        {mails.map((mail) => (
          <Mail key={mail.id} data={mail} deleteMail={deleteMail} />
        ))}
      </Card>
    </div>
  );
};
export default Inbox;

import { Fragment } from "react";
import { Archive, Trash, Eye } from "react-bootstrap-icons";
import styles from "./Mail.module.css";
const Mail = (props) => {
  //method to handle deletion of a mail
  const deleteHandler = () => {
    deleteMail(props.data.mailId);
    props.removeMailFromState(props.data.mailId);
  };

  //Http trigger for deleting a mail
  const deleteMail = async (mailId) => {
    await fetch("http://localhost:8080/api/mail/" + mailId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  //method to handle archive of a mail
  const archiveHandler = () => {
    archiveMail(props.data.mailId);
    props.removeMailFromState(props.data.mailId);
  };

  //metthod to fire http request to archive a mail
  const archiveMail = async (mailId) => {
    await fetch("http://localhost:8080/api/mail/archive/" + mailId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  //method to handle opening a mail
  const viewHandler = () => {};
  return (
    <div className={styles["mail-card"]}>
      <div className={styles.mail}>
        <p className={styles.subject}>{props.data.subject}</p>
        <p className={styles.sender}>
          {!props.isSentMails
            ? props.data.senderEmail
            : props.data.receiverEmail}
        </p>
        <button onClick={viewHandler} className={styles.eye}>
          <Eye size={20} />
        </button>
        {!props.isSentMails && (
          <Fragment>
            <button onClick={deleteHandler} className={styles.trash}>
              <Trash size={20} />
            </button>
            <button onClick={archiveHandler} className={styles.archive}>
              <Archive size={20} />
            </button>
          </Fragment>
        )}
      </div>
    </div>
  );
};
export default Mail;

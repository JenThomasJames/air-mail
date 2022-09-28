import { Archive, Trash, Eye } from "react-bootstrap-icons";
import styles from "./Mail.module.css";
const Mail = (props) => {
  //method to handle opening a mail
  const readMailHandler = () => {};

  //method to handle deletion of a mail
  const deleteHandler = () => {
    deleteMail(props.data.mailId);
    props.deleteMail(props.data.mailId);
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
    props.deleteMail(props.data, false);
  };

  //method to handle view of a mail
  const viewHandler = () => {};
  return (
    <div className={styles["mail-card"]} onClick={readMailHandler}>
      <div className={styles.mail}>
        <p className={styles.subject}>{props.data.subject}</p>
        <p className={styles.sender}>{props.data.senderEmail}</p>
        <button onClick={viewHandler} className={styles.eye}>
          <Eye size={20} />
        </button>
        <button onClick={deleteHandler} className={styles.trash}>
          <Trash size={20} />
        </button>
        <button onClick={archiveHandler} className={styles.archive}>
          <Archive size={20} />
        </button>
      </div>
    </div>
  );
};
export default Mail;
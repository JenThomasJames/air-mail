import { Archive, Trash } from "react-bootstrap-icons";
import styles from "./Mail.module.css";
const Mail = (props) => {
  //method to handle opening a mail
  const readMailHandler = () => {};

  //method to handle deletion of a mail

  const deleteHandler = () => {
    props.deleteMail(props.data, true);
  };

  //method to handle archive of a mail
  const archiveHandler = () => {
    props.deleteMail(props.data, false);
  };
  return (
    <div className={styles["mail-card"]} onClick={readMailHandler}>
      <div className={styles.mail}>
        <p className={styles.subject}>{props.data.subject}</p>
        <p className={styles.sender}>{props.data.sender}</p>
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

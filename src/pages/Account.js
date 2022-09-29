import styles from "./Account.module.css";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className={styles.flex}>
      <Card>
        <div className={styles["card-wrapper"]}>
          <div className={styles["card-header"]}>
            <p className={styles["text-muted"]}>
              {localStorage.getItem("loggedInUserId")}
            </p>
            <button onClick={logoutHandler} className={styles["logout-btn"]}>
              Logout
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Account;

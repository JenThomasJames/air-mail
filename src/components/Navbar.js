import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ThreeDotsVertical } from "react-bootstrap-icons";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuToggleHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <h1 className={styles.logo}>air</h1>
      </div>
      <div className={styles.links}>
        <NavLink className={styles.auth} to="auth">
          Login
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? styles.active : styles.link
          }
          to="new"
        >
          New Mail
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? styles.active : styles.link
          }
          to="inbox"
        >
          Inbox
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? styles.active : styles.link
          }
          to="sent"
        >
          Sent Items
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? styles.active : styles.link
          }
          to="archive"
        >
          Archived
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? styles.active : styles.link
          }
          to="account"
        >
          Account
        </NavLink>
        <div className={styles.menu}>
          <button className={styles["menu-btn"]} onClick={menuToggleHandler}>
            <ThreeDotsVertical size={20} />
          </button>
          {showMenu && (
            <div className={styles["menu-drawer"]}>
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? styles["drawer-link-active"]
                    : styles["drawer-link"]
                }
                to="new"
              >
                New Mail
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? styles["drawer-link-active"]
                    : styles["drawer-link"]
                }
                to="inbox"
              >
                Inbox
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? styles["drawer-link-active"]
                    : styles["drawer-link"]
                }
                to="sent"
              >
                Sent Items
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? styles["drawer-link-active"]
                    : styles["drawer-link"]
                }
                to="archived"
              >
                Archived
              </NavLink>
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? styles["drawer-link-active"]
                    : styles["drawer-link"]
                }
                to="account"
              >
                Account
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;

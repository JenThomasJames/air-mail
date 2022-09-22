import { Fragment, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Compose from "./pages/Compose";
import Inbox from "./pages/Inbox";
import Outbox from "./pages/Outbox";
import Archive from "./pages/Archive";
import Account from "./pages/Account";
import Auth from "./pages/Auth";
import Unprotected from "./components/Layout/Unprotected";
import Protected from "./components/Layout/Protected";

function App() {
  const [registerMode, setRegisterMode] = useState(false);
  const setAuthMode = (isRegister) => {
    setRegisterMode(isRegister);
  };
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route element={<Unprotected />}>
              <Route
                path="auth"
                element={
                  <Auth authMode={registerMode} setAuthMode={setAuthMode} />
                }
              />
            </Route>
            <Route element={<Protected />}>
              <Route path="new" element={<Compose />} />
              <Route path="inbox" element={<Inbox />} />
              <Route path="sent" element={<Outbox />} />
              <Route path="archive" element={<Archive />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="*" element={<Navigate to="auth" />} />
          </Routes>
        </header>
      </div>
    </Fragment>
  );
}

export default App;

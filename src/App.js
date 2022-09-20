import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Compose from "./pages/Compose";
import Inbox from "./pages/Inbox";
import Outbox from "./pages/Outbox";
import Archive from "./pages/Archive";
import Account from "./pages/Account";
import Auth from "./pages/Auth";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="auth" element={<Auth />} />
            <Route path="new" element={<Compose />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="sent" element={<Outbox />} />
            <Route path="archive" element={<Archive />} />
            <Route path="account" element={<Account />} />
            <Route path="*" element={<Navigate to="auth" />} />
          </Routes>
        </header>
      </div>
    </Fragment>
  );
}

export default App;

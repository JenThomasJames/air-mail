import { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Compose from "./pages/Compose";
import Inbox from "./pages/Inbox";
import Outbox from "./pages/Outbox";
import Archive from "./pages/Archive";
import Account from "./pages/Account";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="new" element={<Compose />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="sent" element={<Outbox />} />
            <Route path="archive" element={<Archive />} />
            <Route path="account" element={<Account />} />
          </Routes>
        </header>
      </div>
    </Fragment>
  );
}

export default App;

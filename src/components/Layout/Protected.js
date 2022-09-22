import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Protected = () => {
  return (
    <div className="stretch">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Protected;

import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import AppBar from "../appBar/AppBar";

const BaseLayout = () => {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="content-wrapper">
        <AppBar />
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;

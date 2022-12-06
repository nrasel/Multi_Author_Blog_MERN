import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <div className="dashboard-main-content">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;

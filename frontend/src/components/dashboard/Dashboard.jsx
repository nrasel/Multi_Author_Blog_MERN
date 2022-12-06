import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardIndex from "./DashboardIndex";
import DashboardNavbar from "./DashboardNavbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <div className="dashboard-main-content">
        <Sidebar />
        <Switch>
          <Route path="/dashboard" component={DashboardIndex}  />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import ArticleAdd from "./ArticleAdd";
import DashboardArticle from "./DashboardArticle";
import DashboardIndex from "./DashboardIndex";
import DashboardNavbar from "./DashboardNavbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <DashboardNavbar />
      <div className="dashboard-main-content">
        <Sidebar />
        <Switch>
          <Route exact path="/dashboard" component={DashboardIndex} />
          <Route
            exact
            path="/dashboard/all-article"
            component={DashboardArticle}
          />
          <Route exact path="/dashboard/article-add" component={ArticleAdd} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;

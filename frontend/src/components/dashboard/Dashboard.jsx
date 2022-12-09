import React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import AddCategory from "./AddCategory";
import AddTag from "./AddTag";
import AllCategory from "./AllCategory";
import AllSubAdmin from "./AllSubAdmin";
import AllTag from "./AllTag";
import AllUser from "./AllUser";
import ArticleAdd from "./ArticleAdd";
import ArticleEdit from "./ArticleEdit";
import DashboardArticle from "./DashboardArticle";
import DashboardComments from "./DashboardComments";
import DashboardIndex from "./DashboardIndex";
import DashboardNavbar from "./DashboardNavbar";
import EditCategory from "./EditCategory";
import EditTag from "./EditTag";
import Sidebar from "./Sidebar";
import SubAdminProfile from "./SubAdminProfile";

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
          {/* dashboard home page route route */}
          <Route exact path="/dashboard" component={DashboardIndex} />

          {/* for handle all article under dashboard  */}
          {/* dashboard all article route and pagination */}
          <Route
            exact
            path="/dashboard/all-article/:currentPage?"
            component={DashboardArticle}
          />
          {/* article add route under dashboard */}
          <Route exact path="/dashboard/add-article" component={ArticleAdd} />
          {/* article edit route to find the individual article using this articleSlug(slug) */}
          <Route
            exact
            path="/dashboard/article/edit/:articleSlug"
            component={ArticleEdit}
          />

          {/* for handle all category under dashboard route */}
          {/* dashboard all category route and pagination */}
          <Route
            path="/dashboard/all-category/:currentPage?"
            component={AllCategory}
            exact
          />
          {/* category add route under dashboard */}
          <Route path="/dashboard/add-category" component={AddCategory} exact />
          {/* article edit route to find the individual article using this articleSlug(slug) */}
          <Route
            path="/dashboard/category/edit/:catSlug"
            component={EditCategory}
            exact
          />

          {/* for handle all tag under dashboard route */}
          {/* dashboard all tag route and pagination */}
          <Route
            path="/dashboard/all-tag/:currentPage?"
            component={AllTag}
            exact
          />
          {/* tag add route under dashboard */}
          <Route path="/dashboard/add-tag" component={AddTag} exact />
          {/* tag edit route to find the individual tag using this tagSlug(slug) */}
          <Route
            path="/dashboard/tag/edit/:tagSlug"
            component={EditTag}
            exact
          />
          <Route
            path="/dashboard/all-sub-admin/:currentPage?"
            component={AllSubAdmin}
            exact
          />
          {/* all user route under dashboard */}
          <Route path="/dashboard/all-user" component={AllUser} exact />
          {/* sub admin profile route find individual sub admin profile using adminId reference and then get the info from database */}
          <Route
            exact
            path="/dashboard/sub-admin-profile/:adminId"
            component={SubAdminProfile}
          />

          {/* dashboar comments route */}
          <Route
            path="/dashboard/comments/:currentPage?"
            component={DashboardComments}
            exact
          />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;

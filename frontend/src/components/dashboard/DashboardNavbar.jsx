import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import AdminInfo from "./AdminInfo";
import UserMessage from "./UserMessage";

const DashboardNavbar = () => {
  return (
    <>
      <div className="dashboard-navbar">
        <div className="dashboard-navbar-left">
          <label htmlFor="" className="dash">
            <span>D</span>
          </label>
          <label htmlFor="sidebar" className="bar">
            <span>
              <AiOutlineMenu />
            </span>
          </label>
          <h2>
            <Link to="/dashboard">Naimur Rahman</Link>
          </h2>
        </div>
        <div className="dashboard-navbar-right">
          <h2>
            <Link to="/dashboard">
              <span>View Site</span>
            </Link>
          </h2>
          <div className="search">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <div className="user">
            <div className="notification-message">
              <div className="notification">
                <div>
                  <span>
                    <BsBell />
                  </span>
                  <div className="nCount">5</div>
                </div>
              </div>
              <UserMessage />
            </div>
          </div>
          <label htmlFor="adminInfo">
            <img
              src="http://localhost:3000/articleImage/artificial.jpg"
              alt=""
            />
          </label>
        </div>
      </div>
      <AdminInfo />
    </>
  );
};

export default DashboardNavbar;

import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import AdminInfo from "./AdminInfo";
import UserMessage from "./UserMessage";

const DashboardNavbar = () => {
  return (
    <>
      <div className="dashboard-navbar">
        <div className="dashboard-navbar-left-side">
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
        <div className="dashboard-navbar-right-side">
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
                <div className="notification show">
                  <ul>
                    <li>
                      <Link to="/">Naimur comment your article</Link>
                      <div className="ndelete">
                        <FaTrash />
                      </div>
                    </li>
                    <li>
                      <Link to="/">Naimur comment your article</Link>
                      <div className="ndelete">
                        <FaTrash />
                      </div>
                    </li>
                    <li>
                      <Link to="/">Naimur comment your article</Link>
                      <div className="ndelete">
                        <FaTrash />
                      </div>
                    </li>
                    <li>
                      <Link to="/">Naimur comment your article</Link>
                      <div className="ndelete">
                        <FaTrash />
                      </div>
                    </li>
                    <li>
                      <Link to="/">Naimur comment your article</Link>
                      <div className="ndelete">
                        <FaTrash />
                      </div>
                    </li>
                    <li>
                      <Link to="/">Naimur comment your article</Link>
                      <div className="ndelete">
                        <FaTrash />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <UserMessage />
            </div>
            <label htmlFor="adminInfo">
              <img
                src="http://localhost:3000/designimage/register.jpg"
                alt=""
              />
            </label>
            <div className="name-time">
              <h3>Naimur Rahman</h3>
              <span>2 jun 2022</span>
            </div>
          </div>
        </div>
      </div>
      <AdminInfo />
    </>
  );
};

export default DashboardNavbar;

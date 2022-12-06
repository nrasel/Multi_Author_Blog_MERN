import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { FaRegCaretSquareRight, FaTag, FaUser } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="dashboard-main-content-sidebar">
      <ul>
        <li>
          <Link to="/dashboard">
            <label>
              <h3>
                <span>
                  <AiFillDashboard />
                </span>
                <span>Dashboard</span>
              </h3>
            </label>
          </Link>
        </li>
        <li>
          <label htmlFor="article">
            <h3>
              <span>
                <RiArticleLine />
              </span>
              <span>Article</span>
            </h3>
            <span className="righ-icon">
              <BsChevronRight />
            </span>
          </label>
        </li>
        <li>
          <label htmlFor="category">
            <h3>
              <span>
                <FaRegCaretSquareRight />
              </span>
              <span>Category</span>
            </h3>
            <span className="righ-icon">
              <BsChevronRight />
            </span>
          </label>
        </li>
        <li>
          <label htmlFor="tag">
            <h3>
              <span>
                <FaTag />
              </span>
              <span>Tag</span>
            </h3>
            <span className="righ-icon">
              <BsChevronRight />
            </span>
          </label>
        </li>
        <li>
          <label htmlFor="tag">
            <h3>
              <span>
                <FaUser />
              </span>
              <span>User</span>
            </h3>
            <span className="righ-icon">
              <BsChevronRight />
            </span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

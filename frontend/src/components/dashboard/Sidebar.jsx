import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import {
  FaComments,
  FaEye,
  FaPlusCircle,
  FaRegCaretSquareRight,
  FaTag,
  FaUser,
} from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="dashboard-main-content-sidebar">
      <ul>
        <input type="checkbox" id="article" />
        <input type="checkbox" id="category" />
        <input type="checkbox" id="tag" />
        <input type="checkbox" id="user" />
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
            <span className="right-icon1">
              <BsChevronRight />
            </span>
          </label>
          <div className="article-category">
            <Link to="/dashboard/all-article">
              <span>
                <FaEye />
              </span>
              <span>All Article</span>
            </Link>
            <Link to="/dashboard/add-article">
              <span>
                <FaPlusCircle />
              </span>
              <span>Add Article</span>
            </Link>
          </div>
        </li>
        <li>
          <label htmlFor="category">
            <h3>
              <span>
                <FaRegCaretSquareRight />
              </span>
              <span>Category</span>
            </h3>
            <span className="right-icon2">
              <BsChevronRight />
            </span>
          </label>
          <div className="category-category">
            <Link to="/dashboard/all-category">
              <span>
                <FaEye />
              </span>
              <span>All Category</span>
            </Link>
            <Link to="/dashboard/add-category">
              <span>
                <FaPlusCircle />
              </span>
              <span>Add Category</span>
            </Link>
          </div>
        </li>
        <li>
          <label htmlFor="tag">
            <h3>
              <span>
                <FaTag />
              </span>
              <span>Tag</span>
            </h3>
            <span className="right-icon3">
              <BsChevronRight />
            </span>
          </label>
          <div className="tag-category">
            <Link to="/dashboard/all-tag">
              <span>
                <FaEye />
              </span>
              <span>All Tag</span>
            </Link>
            <Link to="/dashboard/add-tag">
              <span>
                <FaPlusCircle />
              </span>
              <span>Add Tag</span>
            </Link>
          </div>
        </li>
        <li>
          <label htmlFor="user">
            <h3>
              <span>
                <FaUser />
              </span>
              <span>User</span>
            </h3>
            <span className="right-icon4">
              <BsChevronRight />
            </span>
          </label>
          <div className="user-category">
            <Link to="/dashboard/all-user">
              <span>
                <FaEye />
              </span>
              <span>All User</span>
            </Link>
            <Link to="/dashboard/all-sub-admin">
              <span>
                <FaEye />
              </span>
              <span>All Subadmin</span>
            </Link>
          </div>
        </li>
        <li>
          <Link to="/dashboard/comments">
            <label>
              <h3>
                <span>
                  <FaComments />
                </span>
                <span>All Comments</span>
              </h3>
            </label>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

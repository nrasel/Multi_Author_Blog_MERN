import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import {
  FaEye,
  FaPlus,
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
            <Link>
              <span>
                <FaPlus />
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
            <Link>
              <span>
                <FaEye />
              </span>
              <span>All Article</span>
            </Link>
            <Link>
              <span>
                <FaPlus />
              </span>
              <span>Add Article</span>
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
            <Link>
              <span>
                <FaEye />
              </span>
              <span>All Article</span>
            </Link>
            <Link>
              <span>
                <FaPlus />
              </span>
              <span>Add Article</span>
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
            <Link>
              <span>
                <FaEye />
              </span>
              <span>All User</span>
            </Link>
            <Link>
              <span>
                <FaEye />
              </span>
              <span>All Subadmin</span>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

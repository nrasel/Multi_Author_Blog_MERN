import React from "react";
import Helmet from "react-helmet";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardArticle = () => {
  return (
    <div className="dashboard-article">
      <Helmet>
        <title>All Article</title>
      </Helmet>
      <div className="article-action-pagination">
        <div className="numof-search-newAdd">
          <div className="numof">
            <h2>Article (22)</h2>
          </div>
          <div className="searchof">
            <div className="search">
              <input
                type="text"
                className="form-control"
                placeholder="Find Your Article"
              />
            </div>
            <span>
              <FaSearch />
            </span>
          </div>
          <div className="newAdd">
            <Link className="btn" to="/dashboard/add-article">
              Add New
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardArticle;

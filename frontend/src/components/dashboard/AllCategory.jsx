import React from "react";
import { Helmet } from "react-helmet";
import { FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from "../home/Pagination";

const AllCategory = () => {
  return (
    <div className="all-category">
      <Helmet>
        <title>All Category</title>
      </Helmet>
      <div className="show-category-action">
        <div className="numof-search-newAdd">
          <div className="numof">
            <h2>Category (22)</h2>
          </div>
          <div className="searchof">
            <div className="search">
              <input
                type="text"
                className="form-control"
                placeholder="Find Your Category"
              />
            </div>
            <span>
              <FaSearch />
            </span>
          </div>
          <div className="newAdd">
            <Link className="btn" to="/dashboard/add-category">
              Add New
            </Link>
          </div>
        </div>
        <div className="height-60vh">
          <div className="categories">
            <div className="category">
              <div className="name">Programming</div>
              <div className="action">
                <span>
                  <Link to="/dashboard/category/edit/:sdsl">
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <MdDelete />
                </span>
              </div>
            </div>
            <div className="category">
              <div className="name">Programming</div>
              <div className="action">
                <span>
                  <Link to="/dashboard/category/edit/:sdsl">
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <MdDelete />
                </span>
              </div>
            </div>
            <div className="category">
              <div className="name">Programming</div>
              <div className="action">
                <span>
                  <Link to="/dashboard/category/edit/:sdsl">
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <MdDelete />
                </span>
              </div>
            </div>
            <div className="category">
              <div className="name">Programming</div>
              <div className="action">
                <span>
                  <Link to="/dashboard/category/edit/:sdsl">
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <MdDelete />
                </span>
              </div>
            </div>
            <div className="category">
              <div className="name">Programming</div>
              <div className="action">
                <span>
                  <Link to="/dashboard/category/edit/:sdsl">
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <MdDelete />
                </span>
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default AllCategory;

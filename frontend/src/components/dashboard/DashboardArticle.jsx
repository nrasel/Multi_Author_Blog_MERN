import React from "react";
import Helmet from "react-helmet";
import { FaRegEye, FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from "../home/Pagination";

const DashboardArticle = () => {
  const text = "Lorem Ipsum is simply dummy text of the printing";
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
        <div className="height-70vh">
          <div className="articles">
            <div className="article">
              <img
                src="http://localhost:3000/articleImage/artificial.jpg"
                alt=""
              />
              <Link to="/article/details/slug">
                Lorem Ipsum is simply dummy text of the printing
              </Link>
              <p>{text}</p>
              <div className="action">
                <span>
                  <Link>
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <Link>
                    <FaRegEye />
                  </Link>
                </span>
                <span>
                  <MdDelete />
                </span>
              </div>
            </div>
            <div className="article">
              <img
                src="http://localhost:3000/articleImage/artificial.jpg"
                alt=""
              />
              <Link to="/article/details/slug">
                Lorem Ipsum is simply dummy text of the printing
              </Link>
              <p>{text}</p>
              <div className="action">
                <span>
                  <Link>
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <Link>
                    <FaRegEye />
                  </Link>
                </span>
                <span>
                  <MdDelete />
                </span>
              </div>
            </div>
            <div className="article">
              <img
                src="http://localhost:3000/articleImage/artificial.jpg"
                alt=""
              />
              <Link to="/article/details/slug">
                Lorem Ipsum is simply dummy text of the printing
              </Link>
              <p>{text}</p>
              <div className="action">
                <span>
                  <Link>
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <Link>
                    <FaRegEye />
                  </Link>
                </span>
                <span>
                  <MdDelete />
                </span>
              </div>
            </div>
            <div className="article">
              <img
                src="http://localhost:3000/articleImage/artificial.jpg"
                alt=""
              />
              <Link to="/article/details/slug">
                Lorem Ipsum is simply dummy text of the printing
              </Link>
              <p>{text}</p>
              <div className="action">
                <span>
                  <Link>
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <Link>
                    <FaRegEye />
                  </Link>
                </span>
                <span>
                  <MdDelete />
                </span>
              </div>
            </div>
            <div className="article">
              <img
                src="http://localhost:3000/articleImage/artificial.jpg"
                alt=""
              />
              <Link to="/article/details/slug">
                Lorem Ipsum is simply dummy text of the printing
              </Link>
              <p>{text}</p>
              <div className="action">
                <span>
                  <Link>
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <Link>
                    <FaRegEye />
                  </Link>
                </span>
                <span>
                  <MdDelete />
                </span>
              </div>
            </div>
            <div className="article">
              <img
                src="http://localhost:3000/articleImage/artificial.jpg"
                alt=""
              />
              <Link to="/article/details/slug">
                Lorem Ipsum is simply dummy text of the printing
              </Link>
              <p>{text}</p>
              <div className="action">
                <span>
                  <Link>
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <Link>
                    <FaRegEye />
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

export default DashboardArticle;

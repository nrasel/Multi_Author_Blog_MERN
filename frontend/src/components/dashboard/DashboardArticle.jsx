import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { FaRegEye, FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_all_article } from "../../store/actions/Dashboard/articleAction";
import Pagination from "../home/Pagination";

const DashboardArticle = () => {
  const { currentPage } = useParams();

  const dispatch = useDispatch();
  // const {} = useSelector((state) => state.articleReducer);
  const text = "Lorem Ipsum is simply dummy text of the printing";
  const handleArticleSearch = () => {};
  useEffect(() => {
    dispatch(get_all_article(currentPage ? currentPage.split("-")[1] : 1));
  }, [currentPage]);
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
                onChange={handleArticleSearch}
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
                  <Link to="/dashboard/article/edit/dkssd">
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <Link to="/">
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
                  <Link to="/dashboard/article/edit/dkssd">
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <Link to="/">
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
                  <Link to="/dashboard/article/edit/dkssd">
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <Link to="/">
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
                  <Link to="/dashboard/article/edit/dkssd">
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <Link to="/">
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
                  <Link to="/dashboard/article/edit/dkssd">
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <Link to="/">
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
                  <Link to="/dashboard/article/edit/dkssd">
                    <MdEdit />
                  </Link>
                </span>
                <span>
                  <Link to="/">
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

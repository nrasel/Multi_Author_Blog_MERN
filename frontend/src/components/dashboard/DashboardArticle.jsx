import React, { useEffect } from "react";
import Helmet from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import htmlToText from "react-html-parser";
import { FaRegEye, FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  delete_article,
  get_all_article,
} from "../../store/actions/Dashboard/articleAction";
import Pagination from "../home/Pagination";

const DashboardArticle = () => {
  const { currentPage } = useParams();
  const dispatch = useDispatch();
  const { allArticle, perPage, articleCount, articleSuccessMessage } =
    useSelector((state) => state.articleReducer);

  useEffect(() => {
    dispatch(get_all_article(currentPage ? currentPage.split("-")[1] : 1));
  }, [currentPage]);

  useEffect(() => {
    if (articleSuccessMessage) {
      toast.success(articleSuccessMessage);

      dispatch({
        type: "ARTICLE_SUCCESS_MESSAGE_CLEAR",
      });
      dispatch(get_all_article(currentPage ? currentPage.split("-")[1] : 1));
    }
  }, [articleSuccessMessage]);

  return (
    <div className="dashboard-article">
      <Toaster
        position={"top-center"}
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "15px",
          },
        }}
      />
      <Helmet>
        <title>All Article</title>
      </Helmet>
      <div className="article-action-pagination">
        <div className="numof-search-newAdd">
          <div className="numof">
            <h2>Article ({articleCount})</h2>
          </div>
          <div className="searchof">
            <div className="search">
              <input
                onChange={(e) =>
                  dispatch(
                    get_all_article(
                      currentPage ? currentPage.split("-")[1] : 1,
                      e.target.value
                    )
                  )
                }
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
            {allArticle.length > 0 ? (
              allArticle.map((art, index) => (
                <div key={index} className="article">
                  <img
                    src={`http://localhost:3000/articleImage/${art.image}`}
                    alt=""
                  />
                  <Link to={`/article/details/${art.slug}`}>
                    {art.title.slice(0, 30)}...
                  </Link>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {htmlToText(art.article_text.slice(0, 50))}
                  </p>
                  <div className="action">
                    <span>
                      <Link to={`/dashboard/article/edit/${art.slug}`}>
                        <MdEdit />
                      </Link>
                    </span>
                    <span>
                      <Link to={`/article/details/${art.slug}`}>
                        <FaRegEye />
                      </Link>
                    </span>
                    <span onClick={() => dispatch(delete_article(art._id))}>
                      <MdDelete />
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <h3>Article not found</h3>
            )}
          </div>
        </div>
        {articleCount === 0 || articleCount < perPage ? (
          ""
        ) : (
          <Pagination
            pageNumber={currentPage ? currentPage.split("-")[1] : 1}
            perPage={perPage}
            itemCount={articleCount}
            path="/dashboard/all-article"
          />
        )}
      </div>
    </div>
  );
};

export default DashboardArticle;

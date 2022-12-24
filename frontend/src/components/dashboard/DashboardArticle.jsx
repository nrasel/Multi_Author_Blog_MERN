import React, { useEffect } from "react";
import Helmet from "react-helmet";
import htmlToText from "react-html-parser";
import { FaRegEye, FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_all_article } from "../../store/actions/Dashboard/articleAction";
import Pagination from "../home/Pagination";

const DashboardArticle = () => {
  const { currentPage } = useParams();
  const dispatch = useDispatch();
  const { allArticle, perPage, articleCount } = useSelector(
    (state) => state.articleReducer
  );

  // const {} = useSelector((state) => state.articleReducer);

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
            {allArticle.length > 0
              ? allArticle.map((art, index) => (
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
                      <span>
                        <MdDelete />
                      </span>
                    </div>
                  </div>
                ))
              : "Category not found"}
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

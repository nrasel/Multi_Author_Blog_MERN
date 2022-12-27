import moment from "moment";
import React, { useEffect } from "react";
import htmlToText from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_home_category } from "../../store/actions/home/homeAction";
import Pagination from "./Pagination";

const CategoryArticle = () => {
  const dispatch = useDispatch();
  const { categoryArticle, articleCount, perPage } = useSelector(
    (state) => state.homeReducer
  );

  // app.js and dashboard er vitor a query hisebe category slug and currentPage query disilam
  const { currentPage, categorySlug } = useParams();

  useEffect(() => {
    dispatch(
      get_home_category(
        categorySlug,
        currentPage ? currentPage.split("-")[1] : 1
      ),
      ""
    );
  }, [dispatch, currentPage, categorySlug]);
  return (
    <>
      <div className="home-articles">
        {categoryArticle.length > 0
          ? categoryArticle.map((art, index) => (
              <div key={index} className="home-article">
                <div className="row">
                  <div className="col-4">
                    <div className="home-image">
                      <div className="image">
                        <img
                          src={`http://localhost:3000/articleImage/${art.image}`}
                          alt=""
                        />
                        <span>{art.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="home-article-details">
                      <div className="title">
                        <Link to={`/article/details/${art.slug}`}>
                          {art.title}...
                        </Link>
                      </div>
                      <div className="name-time">
                        <span>
                          <Link to="/">{art.adminName}</Link>
                        </span>
                        <span>{moment(art.updatedAt).fromNow()}</span>
                      </div>
                      <div className="article-text">
                        <p>{htmlToText(art.article_text.slice(0, 300))}</p>
                      </div>
                      <div className="read-more">
                        <button className="read-more-btn">
                          <Link to={`/article/details/${art.slug}`}>
                            Read More
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "Article not found"}
      </div>
      {perPage < articleCount ? (
        <Pagination
          pageNumber={currentPage ? currentPage.split("-")[1] : 1}
          perPage={perPage}
          itemCount={articleCount}
          path={`/article/category/${categorySlug}`}
        />
      ) : null}
    </>
  );
};

export default CategoryArticle;

import moment from "moment";
import React, { useEffect } from "react";
import htmlToText from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_all_article_home } from "../../store/actions/home/homeAction";
import Pagination from "./Pagination";
const HomeArticle = () => {
  const dispatch = useDispatch();
  const { allArticle, perPage, articleCount } = useSelector(
    (state) => state.homeReducer
  );

  const { currentPage } = useParams();

  useEffect(() => {
    dispatch(
      get_all_article_home(currentPage ? currentPage.split("-")[1] : ""),
      ""
    );
  }, [dispatch, currentPage]);
  return (
    <>
      <div className="home-articles">
        {allArticle.length > 0
          ? allArticle.map((art, index) => (
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
          : ""}
      </div>
      {perPage < articleCount ? (
        <Pagination
          pageNumber={currentPage ? currentPage.split("-")[1] : 1}
          perPage={perPage}
          itemCount={articleCount}
          path="/article"
        />
      ) : null}
    </>
  );
};

export default HomeArticle;

import moment from "moment";
import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get_old_recent_article } from "../../store/actions/home/homeAction";

const Footer = () => {
  const dispatch = useDispatch();
  const { allTag, allCategory, recentArticle, oldArticle } = useSelector(
    (state) => state.homeReducer
  );
  useEffect(() => {
    dispatch(get_old_recent_article());
  }, []);
  return (
    <section id="footer">
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="title">
                <h3>Old Article</h3>
              </div>
              {oldArticle.length > 0 &&
                oldArticle.map((oldArt, index) => (
                  <div key={index} className="some-recent-article">
                    <div className="row">
                      <div className="col-4">
                        <div className="img">
                          <img
                            src={`http://localhost:3000/articleImage/${oldArt.image}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="title-link">
                          <Link to={`/article/details/${oldArt.slug}`}>
                            {oldArt.title.slice(0, 30)}
                          </Link>
                          <br />
                          <span>{moment(oldArt.updatedAt).fromNow()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="col-4">
              <div className="title-cate-tag">
                <div className="title">
                  <h3>Category</h3>
                </div>
                <div className="cate-tag">
                  <div className="cate">
                    <ul className="cate-list">
                      {allCategory.length
                        ? allCategory.map((c, index) => (
                            <div key={index} className="cate-item">
                              <li>
                                <FaChevronRight />
                                <Link
                                  to={`/article/category/${c._id
                                    .trim()
                                    .split(" ")
                                    .join("-")}`}
                                >
                                  {c._id}
                                </Link>
                              </li>
                              <span>({c.count})</span>
                            </div>
                          ))
                        : ""}
                    </ul>
                  </div>
                  <div className="tag">
                    <div className="title">
                      <h3>Tag</h3>
                    </div>
                    <ul className="tag-list">
                      {allTag.length > 0
                        ? allTag.map((t, index) => (
                            <li className="tag-item" key={index}>
                              <Link
                                to={`/article/tag/${t
                                  .trim()
                                  .split(" ")
                                  .join("-")}`}
                              >
                                {t}
                              </Link>
                            </li>
                          ))
                        : ""}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="title">
                <h3>Recent Article</h3>
              </div>
              {recentArticle.length > 0 &&
                recentArticle.map((recentArt, index) => (
                  <div key={index} className="some-recent-article">
                    <div className="row">
                      <div className="col-4">
                        <div className="img">
                          <img
                            src={`http://localhost:3000/articleImage/${recentArt.image}`}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="title-link">
                          <Link to={`/article/details/${recentArt.slug}`}>
                            {recentArt.title.slice(0, 30)}
                          </Link>
                          <br />
                          <span>{moment(recentArt.updatedAt).fromNow()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

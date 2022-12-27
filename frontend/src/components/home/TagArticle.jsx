import moment from "moment";
import React, { useEffect } from "react";
import htmlToText from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_home_tag } from "../../store/actions/home/homeAction";

const TagArticle = () => {
  const dispatch = useDispatch();
  const { currentPage, tagSlug } = useParams();
  const { tagArticle } = useSelector((state) => state.homeReducer);
  console.log(tagArticle);

  useEffect(() => {
    dispatch(get_home_tag(tagSlug, currentPage));
  }, [dispatch, tagSlug, currentPage]);
  return (
    <div className="home-articles">
      {tagArticle.length > 0
        ? tagArticle.map((tagArt, index) => (
            <div key={index} className="home-article">
              <div className="row">
                <div className="col-4">
                  <div className="home-image">
                    <div className="image">
                      <img
                        src={`http://localhost:3000/articleImage/${tagArt.image}`}
                        alt=""
                      />
                      <span>{tagArt.category}</span>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <div className="home-article-details">
                    <div className="title">
                      <Link to={`/article/details/${tagArt.slug}`}>
                        {tagArt.title}...
                      </Link>
                    </div>
                    <div className="name-time">
                      <span>
                        <Link to="/">{tagArt.adminName}</Link>
                      </span>
                      <span>{moment(tagArt.updatedAt).fromNow()}</span>
                    </div>
                    <div className="article-text">
                      <p>{htmlToText(tagArt.article_text.slice(0, 300))}</p>
                    </div>
                    <div className="read-more">
                      <button className="read-more-btn">
                        <Link to={`/article/details/${tagArt.slug}`}>
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
  );
};

export default TagArticle;

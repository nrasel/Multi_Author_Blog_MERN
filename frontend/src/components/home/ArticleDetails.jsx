import moment from "moment";
import React, { useEffect } from "react";
import htmlToText from "react-html-parser";
import { AiFillDislike, AiFillLike, AiFillTag } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  get_article_details,
  like_dislike_get,
  user_article_like,
} from "../../store/actions/home/articleReadAction";
import Comment from "./Comment";

const ArticleDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { readMore, relatedArticle, moreTag, readArticle } = useSelector(
    (state) => state.homeReducer
  );
  const { like, dislike, like_status, dislike_status } = useSelector(
    (state) => state.likeDislikeReducer
  );
  const { userInfo } = useSelector((state) => state.adminReducer);

  useEffect(() => {
    dispatch(get_article_details(slug));
  }, [dispatch, slug]);

  useEffect(() => {
    dispatch(like_dislike_get(slug));
  }, [slug]);

  const articleLike = (e) => {
    e.preventDefault();
    const artObj = {
      articleId: readArticle._id,
      like_status,
      dislike_status,
    };
    dispatch(user_article_like(artObj));
  };

  return (
    <div className="article-details">
      <div className="path">
        <Link to="/">Home</Link>
        <span className="arrow">
          <BsChevronRight />
        </span>
        <Link to={`/article/category/${readArticle?.category_slug}`}>
          {readArticle?.category}
        </Link>
        <span className="arrow">
          <BsChevronRight />
        </span>
        <span>{readArticle?.title}</span>
      </div>
      <div className="title">
        <h3>
          <Link to="#">{readArticle?.title}</Link>
        </h3>
      </div>
      <div className="auth-time">
        <div className="auth">
          <h4>
            <AiFillTag />
            <span>
              <Link to={`/article/tag/${readArticle?.tag_slug}`}>
                {readArticle?.tag}
              </Link>
            </span>
          </h4>
        </div>
        <div className="time">
          <span>{moment(readArticle?.updatedAt).fromNow()}</span>
        </div>
      </div>
      <div className="home-article-image">
        <img
          src={`http://localhost:3000/articleImage/${readArticle?.image}`}
          alt=""
        />
      </div>
      <div className="home-article-text">
        <p>{htmlToText(readArticle?.article_text)}</p>
        <p style={{ marginTop: "18px" }}>
          <img src="http://localhost:3000/articleImage/artificial.jpg" alt="" />
        </p>
      </div>
      <div className="like-dislike-view">
        <div className="like-dislike">
          <div className="dislike">
            {userInfo && userInfo.role === "user" ? (
              <button
                className={dislike_status === "dislike" ? "icon red" : "icon"}
              >
                <AiFillDislike />
              </button>
            ) : (
              <button disabled className="icon ">
                <AiFillDislike />
              </button>
            )}

            <div className="like-number">({dislike})</div>
          </div>
          <div className="like">
            {userInfo && userInfo.role === "user" ? (
              <button
                onClick={articleLike}
                className={like_status === "like" ? "icon blue" : "icon"}
              >
                <AiFillLike />
              </button>
            ) : (
              <button disabled className="icon">
                <AiFillLike />
              </button>
            )}

            <div className="like-number">({like})</div>
          </div>
        </div>
        <div className="view">
          <span>21</span>
          <span>view</span>
        </div>
      </div>
      <div className="read-more">
        <span>Read More : </span>
        <Link to={readMore?.slug}>{readMore?.title}</Link>
      </div>
      <div className="more-tags">
        <span>Tags</span>
        {moreTag.length > 0
          ? moreTag.map((t, index) => (
              <Link to={`/article/tag/${t}`} key={index}>
                {t.split("-").join(" ")}
              </Link>
            ))
          : ""}
      </div>
      <div className="social-icon">
        <a className="l1" href="/">
          <FaFacebook />
        </a>
        <a className="l2" href="/">
          <FaTwitter />
        </a>
        <a className="l3" href="/">
          <FaGithub />
        </a>
        <a className="l4" href="/">
          <FaLinkedin />
        </a>
      </div>
      <div className="related-article">
        <div className="more">
          <h3>Related Articles</h3>
        </div>
        <div className="articles">
          {relatedArticle.length > 0 ? (
            relatedArticle.map((art, index) => (
              <Link
                key={index}
                to={`/article/details/${art.slug}`}
                className="article"
              >
                <img
                  src={`http://localhost:3000/articleImage/${art.image}`}
                  alt=""
                />
                <span>{htmlToText(art.article_text.slice(0, 90))}</span>
              </Link>
            ))
          ) : (
            <span>No related article</span>
          )}
        </div>
      </div>
      <div className="comment-title">
        <h3>Article Comments</h3>
      </div>
      <Comment />
    </div>
  );
};

export default ArticleDetails;

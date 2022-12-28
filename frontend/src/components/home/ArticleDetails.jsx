import React, { useEffect } from "react";
import { AiFillDislike, AiFillLike, AiFillTag } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_article_details } from "../../store/actions/home/articleReadAction";
import Comment from "./Comment";

const ArticleDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_article_details(slug));
  }, [dispatch, slug]);
  return (
    <div className="article-details">
      <div className="path">
        <Link to="/">Home</Link>
        <span className="arrow">
          <BsChevronRight />
        </span>
        <Link>Algorithm</Link>
        <span className="arrow">
          <BsChevronRight />
        </span>
        <span>Lorem Ipsum is simply dummy text of the printing</span>
      </div>
      <div className="title">
        <h3>
          <Link>Lorem Ipsum is simply dummy text of the printing</Link>
        </h3>
      </div>
      <div className="auth-time">
        <div className="auth">
          <h4>
            <AiFillTag />
            <span>
              <Link>Programming</Link>
            </span>
          </h4>
        </div>
        <div className="time">
          <span>2 jun 2022</span>
        </div>
      </div>
      <div className="home-article-image">
        <img src="http://localhost:3000/articleImage/artificial.jpg" alt="" />
      </div>
      <div className="home-article-text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          <img src="http://localhost:3000/articleImage/artificial.jpg" alt="" />
        </p>
      </div>
      <div className="like-dislike-view">
        <div className="like-dislike">
          <div className="dislike">
            <button className="icon red">
              <AiFillDislike />
            </button>
            {/* <button disabled className="icon red">
              <AiFillDislike />
            </button> */}
            <div className="like-number">(12)</div>
          </div>
          <div className="like">
            <button className="icon">
              <AiFillLike />
            </button>
            {/* <button disabled className="icon">
              <AiFillLike />
            </button> */}
            <div className="like-number">(12)</div>
          </div>
        </div>
        <div className="view">
          <span>21</span>
          <span>view</span>
        </div>
      </div>
      <div className="read-more">
        <span>Read More : </span>
        <Link to="/">Lorem Ipsum is simply dummy text of the printing</Link>
      </div>
      <div className="more-tags">
        <span>Tags</span>
        <Link>Computer</Link>
        <Link>Programming</Link>
        <Link>Java</Link>
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
          <Link className="article" to="/">
            <img
              src="http://localhost:3000/articleImage/artificial.jpg"
              alt=""
            />
            <span>Lorem Ipsum is simply dummy text of the printing</span>
          </Link>
          <Link className="article" to="/">
            <img
              src="http://localhost:3000/articleImage/artificial.jpg"
              alt=""
            />
            <span>Lorem Ipsum is simply dummy text of the printing</span>
          </Link>
          <Link className="article" to="/">
            <img
              src="http://localhost:3000/articleImage/artificial.jpg"
              alt=""
            />
            <span>Lorem Ipsum is simply dummy text of the printing</span>
          </Link>
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

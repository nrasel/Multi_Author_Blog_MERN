import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_all_article_home } from "../../store/actions/home/homeAction";
import Pagination from "./Pagination";
const HomeArticle = () => {
  const dispatch = useDispatch();
  const { currentPage } = useParams();
  
  useEffect(() => {
    dispatch(
      get_all_article_home(currentPage ? currentPage.split("-")[1] : ""),
      ""
    );
  }, [currentPage]);
  return (
    <>
      <div className="home-articles">
        <div className="home-article">
          <div className="row">
            <div className="col-4">
              <div className="home-image">
                <div className="image">
                  <img
                    src="http://localhost:3000/articleImage/artificial.jpg"
                    alt=""
                  />
                  <span>Algorithm</span>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="home-article-details">
                <div className="title">
                  <Link to="/article/details/naimur">
                    Lorem Ipsum is simply dummy text of the printing
                  </Link>
                </div>
                <div className="name-time">
                  <span>
                    <Link to="/">Naimur Rahman</Link>
                  </span>
                  <span>2 jun 2022</span>
                </div>
                <div className="article-text">
                  <p>
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the
                  </p>
                </div>
                <div className="read-more">
                  <button className="read-more-btn">
                    <Link to="/article/details/naimur">Read More</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-article">
          <div className="row">
            <div className="col-4">
              <div className="home-image">
                <div className="image">
                  <img
                    src="http://localhost:3000/articleImage/artificial.jpg"
                    alt=""
                  />
                  <span>Algorithm</span>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="home-article-details">
                <div className="title">
                  <Link to="/article/details/naimur">
                    Lorem Ipsum is simply dummy text of the printing
                  </Link>
                </div>
                <div className="name-time">
                  <span>
                    <Link to="/">Naimur Rahman</Link>
                  </span>
                  <span>2 jun 2022</span>
                </div>
                <div className="article-text">
                  <p>
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the
                  </p>
                </div>
                <div className="read-more">
                  <button className="read-more-btn">
                    <Link to="/article/details/naimur">Read More</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-article">
          <div className="row">
            <div className="col-4">
              <div className="home-image">
                <div className="image">
                  <img
                    src="http://localhost:3000/articleImage/artificial.jpg"
                    alt=""
                  />
                  <span>Algorithm</span>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="home-article-details">
                <div className="title">
                  <Link to="/article/details/naimur">
                    Lorem Ipsum is simply dummy text of the printing
                  </Link>
                </div>
                <div className="name-time">
                  <span>
                    <Link to="/">Naimur Rahman</Link>
                  </span>
                  <span>2 jun 2022</span>
                </div>
                <div className="article-text">
                  <p>
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the
                  </p>
                </div>
                <div className="read-more">
                  <button className="read-more-btn">
                    <Link to="/article/details/naimur">Read More</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-article">
          <div className="row">
            <div className="col-4">
              <div className="home-image">
                <div className="image">
                  <img
                    src="http://localhost:3000/articleImage/artificial.jpg"
                    alt=""
                  />
                  <span>Algorithm</span>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="home-article-details">
                <div className="title">
                  <Link to="/article/details/naimur">
                    Lorem Ipsum is simply dummy text of the printing
                  </Link>
                </div>
                <div className="name-time">
                  <span>
                    <Link to="/">Naimur Rahman</Link>
                  </span>
                  <span>2 jun 2022</span>
                </div>
                <div className="article-text">
                  <p>
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the
                  </p>
                </div>
                <div className="read-more">
                  <button className="read-more-btn">
                    <Link to="/article/details/naimur">Read More</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-article">
          <div className="row">
            <div className="col-4">
              <div className="home-image">
                <div className="image">
                  <img
                    src="http://localhost:3000/articleImage/artificial.jpg"
                    alt=""
                  />
                  <span>Algorithm</span>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="home-article-details">
                <div className="title">
                  <Link to="/article/details/naimur">
                    Lorem Ipsum is simply dummy text of the printing
                  </Link>
                </div>
                <div className="name-time">
                  <span>
                    <Link to="/">Naimur Rahman</Link>
                  </span>
                  <span>2 jun 2022</span>
                </div>
                <div className="article-text">
                  <p>
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the
                  </p>
                </div>
                <div className="read-more">
                  <button className="read-more-btn">
                    <Link to="/article/details/naimur">Read More</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default HomeArticle;

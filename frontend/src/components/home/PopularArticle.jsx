import React from "react";
import { Link } from "react-router-dom";

const PopularArticle = () => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          <Link to="/" className="image">
            <img
              src="http://localhost:3000/articleImage/artificial.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="col-8">
          <div className="title-time">
            <Link to="/">Title</Link>
            <br />
            <span>2 jun 2022</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Link to="/" className="image">
            <img
              src="http://localhost:3000/articleImage/artificial.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="col-8">
          <div className="title-time">
            <Link to="/">Title</Link>
            <br />
            <span>2 jun 2022</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Link to="/" className="image">
            <img
              src="http://localhost:3000/articleImage/artificial.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="col-8">
          <div className="title-time">
            <Link to="/">Title</Link>
            <br />
            <span>2 jun 2022</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Link to="/" className="image">
            <img
              src="http://localhost:3000/articleImage/artificial.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="col-8">
          <div className="title-time">
            <Link to="/">Title</Link>
            <br />
            <span>2 jun 2022</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Link to="/" className="image">
            <img
              src="http://localhost:3000/articleImage/artificial.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="col-8">
          <div className="title-time">
            <Link to="/">Title</Link>
            <br />
            <span>2 jun 2022</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularArticle;

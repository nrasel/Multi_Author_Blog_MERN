import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const SubAdminProfile = () => {
  const user = "admin";
  return (
    <div className="sub-admin-profile">
      <Helmet>
        <title>Sub Admin</title>
      </Helmet>
      <div className="profile-contents">
        <div className="numof-search-newAdd">
          <div className="numof">
            <h2>Profile</h2>
          </div>

          <div className="newAdd">
            <Link className="btn" to="/dashboard/all-sub-admin">
              Sub Admin
            </Link>
          </div>
        </div>
        <div className="profile-image-article">
          <div className="profile-image-details">
            <div className="image">
              <img
                src="http://localhost:3000/articleImage/artificial.jpg"
                alt=""
              />
            </div>
            <ul className="profile-details">
              <li>
                <span>Name : </span>
                <span>Naimur Rahman</span>
              </li>
              {user === "admin" && (
                <li>
                  <span>Email : </span>
                  <span>naimur@gmail.com</span>
                </li>
              )}
              <li>
                <span>Role : </span>
                <span>Sub admin </span>
              </li>
              <li>
                <span>Account Create : </span>
                <span>2 jun 2022 </span>
              </li>
              <li>
                <span>Article Write : </span>
                <span>3</span>
              </li>
            </ul>
          </div>
          <div className="write-articles">
            <h2>Article </h2>
            <div className="articles">
              <div className="article">
                <Link to="/article/details/slug">
                  <img
                    src="http://localhost:3000/articleImage/artificial.jpg"
                    alt=""
                  />
                  <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                </Link>
              </div>
              <div className="article">
                <Link to="/article/details/slug">
                  <img
                    src="http://localhost:3000/articleImage/artificial.jpg"
                    alt=""
                  />
                  <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                </Link>
              </div>
              <div className="article">
                <Link to="/article/details/slug">
                  <img
                    src="http://localhost:3000/articleImage/artificial.jpg"
                    alt=""
                  />
                  <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                </Link>
              </div>
              <div className="article">
                <Link to="/article/details/slug">
                  <img
                    src="http://localhost:3000/articleImage/artificial.jpg"
                    alt=""
                  />
                  <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                </Link>
              </div>
              <div className="article">
                <Link to="/article/details/slug">
                  <img
                    src="http://localhost:3000/articleImage/artificial.jpg"
                    alt=""
                  />
                  <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                </Link>
              </div>
              <div className="article">
                <Link to="/article/details/slug">
                  <img
                    src="http://localhost:3000/articleImage/artificial.jpg"
                    alt=""
                  />
                  <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAdminProfile;

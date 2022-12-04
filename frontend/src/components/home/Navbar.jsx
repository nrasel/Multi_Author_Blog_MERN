import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="navbar">
      <div className="container">
        <div className="row">
          <input type="checkbox" id="toggle" />
          <div className="col-4">
            <div className="image-menubar">
              <Link className="image" to="/">
                <img src="http://localhost:3000/designimage/logo.png" alt="" />
              </Link>
              <label className="menu-icon" htmlFor="toggle">
                <AiOutlineMenu />
              </label>
            </div>
          </div>
          <div className="col-8">
            <ul className="link-list toggle">
              <li className="link-item">
                <Link to="/about">About</Link>
              </li>
              <li className="link-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="link-item">
                <Link to="/policy">Policy</Link>
              </li>
              <div className="social-icon">
                <li className="link-item">
                  <Link to="/about">
                    <span>
                      <FaFacebook />
                    </span>
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/about">
                    <span>
                      <BsTwitter />
                    </span>
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/about">
                    <span>
                      <FaYoutube />
                    </span>
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/about">
                    <span>
                      <BsGithub />
                    </span>
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/about">
                    <span>
                      <FaLinkedin />
                    </span>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

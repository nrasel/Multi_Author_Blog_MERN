import React from "react";
import { BsAt } from "react-icons/bs";
import { FaFacebook, FaGoogle, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../home/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="card">
          <div className="auth">
            <h3>Login</h3>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="icon-input">
                  <div className="icon">
                    <BsAt />
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="icon-input">
                  <div className="icon">
                    <FaLock />
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-block">Login</button>
                <button className="btn btn-block">
                  <div className="spinner">
                    <div className="spinner1"></div>
                    <div className="spinner2"></div>
                    <div className="spinner3"></div>
                  </div>
                </button>
              </div>
            </form>
            <div className="or">or</div>
            <div className="fb-google-auth">
              <div className="fb-google-logo">
                <div className="fb">
                  <button>
                    <FaFacebook />
                    <span>SignUp with Facebook</span>
                  </button>
                </div>
                <div className="google">
                  <button>
                    <FaGoogle />
                    <span>SignUp with Google</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="login-page">
              <Link to="/register">Register Your Account</Link>
            </div>
          </div>
          <div className="image-logo">
            <img src="http://localhost:3000/designimage/register.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React from "react";
import { BsAt } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import Navbar from "../home/Navbar";

const AdminLogin = () => {
  return (
    <>
      <Navbar />
      <div className="admin_login">
        <div className="card">
          <div className="auth">
            <h3>Admin Login</h3>
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
          </div>
          <div className="image-logo">
            <img src="http://localhost:3000/designimage/register.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;

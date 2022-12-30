import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsAt } from "react-icons/bs";
import { FaFacebook, FaGoogle, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { user_login } from "../../store/actions/authAction";
import Navbar from "../home/Navbar";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const { errorMessage, loader, authenticate } = useSelector(
    (state) => state.adminReducer
  );
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (authenticate) {
      return history.push("/dashboard");
    }
    if (errorMessage?.error) {
      toast.error(errorMessage?.error);
      dispatch({
        type: "LOGIN_ERROR_CLEAR",
      });
    }
  }, [dispatch, errorMessage?.error, authenticate]);

  useEffect(() => {
    dispatch({
      type: "LOGIN_ERROR_CLEAR",
    });
  }, []);

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const login = (e) => {
    e.preventDefault();
    dispatch(user_login(state));
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <Toaster
          position={"top-center"}
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "15px",
            },
          }}
        />
        <div className="card">
          <div className="auth">
            <h3>Login</h3>
            <form onSubmit={login}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="icon-input">
                  <div className="icon">
                    <BsAt />
                  </div>
                  <input
                    onChange={inputHandle}
                    value={state.email}
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <p className="error">{errorMessage && errorMessage.email}</p>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="icon-input">
                  <div className="icon">
                    <FaLock />
                  </div>
                  <input
                    onChange={inputHandle}
                    value={state.value}
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <p className="error">{errorMessage && errorMessage.password}</p>
              </div>
              <div className="form-group">
                {loader ? (
                  <button className="btn btn-block">
                    <div className="spinner">
                      <div className="spinner1"></div>
                      <div className="spinner2"></div>
                      <div className="spinner3"></div>
                    </div>
                  </button>
                ) : (
                  <button className="btn btn-block">Login</button>
                )}
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

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsAt } from "react-icons/bs";
import { FaLock, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../store/actions/authAction";
import Navbar from "../home/Navbar";

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const { authenticate, errorMessage, successMessage, loader } = useSelector(
    (state) => state.adminReducer
  );
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const [showImage, setShowImage] = useState("");

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const imageHadle = (e) => {
    if (e.target.files.length !== 0) {
      setState({
        ...state,
        image: e.target.files[0],
      });
      const render = new FileReader();
      render.onload = () => {
        setShowImage(render.result);
      };
      render.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("email", state.email);
    formData.append("password", state.password);
    formData.append("image", state.image);
    dispatch(register(formData));
  };

  useEffect(() => {
    if (authenticate) {
      history.push("/dashboard");
    }
    if (successMessage) {
      history.push("/register/email-verify");
      if (errorMessage.error) {
        toast.error(errorMessage?.error);
        dispatch({
          type: "REGISTER_ERROR_CLEAR",
        });
      }
    }
  }, [dispatch, successMessage, errorMessage?.error, authenticate]);

  useEffect(() => {
    dispatch({
      type: "REGISTER_ERROR_CLEAR",
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="register">
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
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <div className="icon-input">
                  <div className="icon">
                    <FaUser />
                  </div>
                  <input
                    onChange={inputHandle}
                    value={state.name}
                    type="text"
                    className="form-control"
                    name="name"
                    id="userName"
                    placeholder="User Name"
                  />
                </div>
                <p>{errorMessage?.name}</p>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="icon-input">
                  <div className="icon">
                    <BsAt />
                  </div>
                  <input
                    onChange={inputHandle}
                    value={state.value}
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <p>{errorMessage?.email}</p>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="icon-input">
                  <div className="icon">
                    <FaLock />
                  </div>
                  <input
                    onChange={inputHandle}
                    value={state.password}
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <p>{errorMessage?.password}</p>
              </div>
              <div className="form-group">
                <input
                  onChange={imageHadle}
                  hidden
                  type="file"
                  name="image"
                  id="reg-image"
                />
                <div className="image-file">
                  <div className="image">
                    {showImage && <img src={`${showImage}`} alt="" />}
                  </div>
                  <div className="file-name">
                    <div className="form-control">{state?.image?.name}</div>
                    <label className="browser" htmlFor="reg-image">
                      Browser
                    </label>
                  </div>
                </div>
                <p>{errorMessage?.image}</p>
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
                  <button className="btn btn-block">Register</button>
                )}
              </div>
              <div className="form-group">
                <div className="login-page">
                  <Link to="/login">Login Your Account</Link>
                </div>
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

export default Register;

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add_tag } from "../../store/actions/Dashboard/tagAction";

const AddTag = ({ history }) => {
  const dispatch = useDispatch();
  const { loader, tagError, tagSuccessMessage } = useSelector(
    (state) => state.dashTagReducer
  );

  const [state, setState] = useState({
    tagName: "",
    tagDes: "",
  });

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const addTag = (e) => {
    e.preventDefault();
    dispatch(add_tag(state));
  };

  useEffect(() => {
    if (tagError && tagError.error) {
      toast.error(tagError.error);
      dispatch({
        type: "TAG_ERROR_MESSAGE_CLEAR",
      });
    }
    if (tagSuccessMessage) {
      toast.success(tagSuccessMessage);
      dispatch({
        type: "TAG_SUCCESS_MESSAGE_CLEAR",
      });
      history.push("/dashboard/all-tag");
    }
  }, [tagError, tagSuccessMessage]);

  return (
    <div className="add-category">
      <Toaster
        position={"top-center"}
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "15px",
          },
        }}
      />
      <Helmet>
        <title>Tag Add</title>
      </Helmet>
      <div className="added">
        <div className="title-show-article">
          <h2>Add Tag</h2>
          <Link className="btn" to="/dashboard/all-tag">
            All Tag
          </Link>
        </div>
        <form onSubmit={addTag}>
          <div className="form-group">
            <label htmlFor="category_name">Tag Name</label>
            <input
              onChange={handleInput}
              type="text"
              placeholder="Tag Name"
              className="form-control"
              name="tagName"
              id="category_name"
              value={state.tagName}
            />
            <p className="error">Please Provide tag name</p>
          </div>
          <div className="form-group">
            <label htmlFor="category_desc">Tag Description</label>
            <textarea
              onChange={handleInput}
              className="form-control"
              name="tagDes"
              id="category_desc"
              cols="30"
              rows="10"
              placeholder="Write Description.."
              value={state.tagDes}
            ></textarea>
            <p className="error">Please Provide tag name</p>
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
              <button className="btn btn-block">Add Tag</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTag;

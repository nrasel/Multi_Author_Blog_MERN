import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add_Category } from "../../store/actions/Dashboard/categoryAction";

const AddCategory = ({ history }) => {
  const dispatch = useDispatch();
  const { loader, categoryError, categorySuccessMessage } = useSelector(
    (state) => state.dashCategoryReducers
  );

  const [state, setState] = useState({
    categoryName: "",
    categoryDes: "",
  });
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const addCategory = (e) => {
    e.preventDefault();
    dispatch(add_Category(state));
  };

  useEffect(() => {
    if (categoryError && categoryError.error) {
      toast.error(categoryError.error);
      dispatch({
        type: "CATEGORY_ERROR_MESSAGE_CLEAR",
      });
    }
    if (categorySuccessMessage) {
      toast.success(categorySuccessMessage);
      dispatch({
        type: "CATEGORY_SUCCESS_MESSAGE_CLEAR",
      });
      history.push("/dashboard/all-category");
    }
  }, [categoryError, categorySuccessMessage]);

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
        <title>Category Add</title>
      </Helmet>
      <div className="added">
        <div className="title-show-article">
          <h2>Add Category</h2>
          <Link className="btn" to="/dashboard/all-category">
            All Category
          </Link>
        </div>
        <form onSubmit={addCategory}>
          <div className="form-group">
            <label htmlFor="category_name">Category Name</label>
            <input
              onChange={inputHandle}
              type="text"
              placeholder="Category Name"
              className="form-control"
              name="categoryName"
              id="category_name"
            />
            <p className="error">
              {categoryError ? categoryError.categoryName : ""}
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="category_desc">Category Description</label>
            <textarea
              onChange={inputHandle}
              className="form-control"
              name="categoryDes"
              id="category_desc"
              cols="30"
              rows="10"
              placeholder="Write Description.."
            ></textarea>
            <p className="error">
              {categoryError ? categoryError.categoryDes : ""}
            </p>
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
              <button className="btn btn-block">Add Category</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;

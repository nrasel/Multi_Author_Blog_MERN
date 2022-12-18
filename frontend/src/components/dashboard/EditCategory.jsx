import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import toast,{ Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  edit_category,
  update_category,
} from "../../store/actions/Dashboard/categoryAction";

const EditCategory = ({ history }) => {
  const { catSlug } = useParams();
  const dispatch = useDispatch();
  const { editCategory, editRequest, categorySuccessMessage, categoryError } =
    useSelector((state) => state.dashCategoryReducers);
  const [state, setState] = useState({
    categoryName: "",
    categoryDes: "",
  });

  // set category name and description and pass category slug to ediCategory action
  useEffect(() => {
    if (editRequest) {
      setState({
        categoryName: editCategory.categoryName,
        categoryDes: editCategory.categoryDes,
      });
    } else {
      dispatch(edit_category(catSlug));
    }
    dispatch({ type: "EDIT_REQUEST_CLEAR" });
  }, [editCategory, catSlug]);

  // category update useEffect
  useEffect(() => {
    if (categorySuccessMessage) {
      history.push("/dashboard/all-category");
    }
  }, [categorySuccessMessage]);

  // input handle for update
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // category update handle
  const updateCategory = (e) => {
    e.preventDefault();
    dispatch(update_category(editCategory._id, state));
  };

  return (
    <div className="add-category">
      <Helmet>
        <title>Edit Category</title>
      </Helmet>
      <div className="added">
        <div className="title-show-article">
          <h2>Edit Category</h2>
          <Link className="btn" to="/dashboard/all-category">
            All Category
          </Link>
        </div>
        <form onSubmit={updateCategory}>
          <div className="form-group">
            <label htmlFor="category_name">Category Name</label>
            <input
              onChange={inputHandle}
              value={state.categoryName}
              type="text"
              placeholder="Category Name"
              className="form-control"
              name="categoryName"
              id="category_name"
            />
            <p className="error">
              {categoryError && categoryError.categoryName}
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="category_desc">Category Description</label>
            <textarea
              onChange={inputHandle}
              value={state.categoryDes}
              className="form-control"
              name="categoryDes"
              id="category_des"
              cols="30"
              rows="10"
              placeholder="Write Description.."
            ></textarea>
            <p className="error">
              {categoryError && categoryError.categoryDes}
            </p>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Update Category</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;

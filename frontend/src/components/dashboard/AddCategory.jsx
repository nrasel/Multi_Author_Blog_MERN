import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add_Category } from "../../store/actions/Dashboard/categoryAction";

const AddCategory = () => {
  const dispatch = useDispatch();
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

  return (
    <div className="add-category">
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
            <p className="error">Please Provide category name</p>
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
            <p className="error">Please Provide category name</p>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Add Category</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;

import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AddTag = () => {
  return (
    <div className="add-category">
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
        <form>
          <div className="form-group">
            <label htmlFor="category_name">Tag Name</label>
            <input
              type="text"
              placeholder="Tag Name"
              className="form-control"
              name="cat_name"
              id="category_name"
            />
            <p className="error">Please Provide tag name</p>
          </div>
          <div className="form-group">
            <label htmlFor="category_desc">Tag Description</label>
            <textarea
              className="form-control"
              name="cate_desc"
              id="category_desc"
              cols="30"
              rows="10"
              placeholder="Write Description.."
            ></textarea>
            <p className="error">Please Provide tag name</p>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Add Tag</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTag;

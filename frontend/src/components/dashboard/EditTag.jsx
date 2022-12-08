import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const EditTag = () => {
  return (
    <div className="add-category">
      <Helmet>
        <title>Edit Tag</title>
      </Helmet>
      <div className="added">
        <div className="title-show-article">
          <h2>Edit Tag</h2>
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
            <p className="error">Please Provide category name</p>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Edit Tag</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTag;

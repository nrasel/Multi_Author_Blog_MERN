import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ArticleAdd = () => {
  return (
    <div className="add-article">
      <Helmet>
        <title>Article Add</title>
      </Helmet>
      <div className="add">
        <div className="title-show-article">
          <h2>Add Article</h2>
          <Link to="/dashboard/all-article">All Article</Link>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="title">Article title</label>
            <input
              type="text"
              name="title"
              placeholder="Article Title"
              className="form-control"
              id="title"
            />
            <p>Please Provide article title</p>
          </div>
          <div className="form-group">
            <label htmlFor="slug">Article Slug</label>
            <input
              type="text"
              className="form-control"
              placeholder="Article Slug"
              name="slug"
              id="slug"
            />
            <p>Please Provide article slug</p>
          </div>
          <button className="btn">Update</button>
          <div className="form-group">
            <label htmlFor="categoryadd">Category</label>
            <select name="category" id="categoryadd">
              <option value="cat1">Programming</option>
              <option value="cat2">Algorithm</option>
              <option value="cat3">Computer</option>
              <option value="cat4">Electrical</option>
            </select>
            <p>Please Provide article slug</p>
          </div>
          <div className="form-group">
            <label htmlFor="tags">Category</label>
            <select name="tags" id="tags">
              <option value="cat1">Programming</option>
              <option value="cat2">Algorithm</option>
              <option value="cat3">Computer</option>
              <option value="cat4">Electrical</option>
            </select>
            <p>Please Provide article slug</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleAdd;

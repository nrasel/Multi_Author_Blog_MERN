import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { edit_category } from "../../store/actions/Dashboard/categoryAction";

const EditCategory = () => {
  const { catSlug } = useParams();
  const dispatch = useDispatch();
  const { editCategory, editRequest } = useSelector(
    (state) => state.dashCategoryReducers
  );
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
    dispatch({
      type: "EDIT_REQUEST_CLEAR",
    });
  }, [editCategory, editRequest, catSlug, dispatch]);
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
        <form>
          <div className="form-group">
            <label htmlFor="category_name">Category Name</label>
            <input
              type="text"
              placeholder="Category Name"
              className="form-control"
              name="categoryName"
              id="category_name"
              value={state.categoryName}
            />
            <p className="error">Please Provide category name</p>
          </div>
          <div className="form-group">
            <label htmlFor="category_desc">Category Description</label>
            <textarea
              className="form-control"
              name="cate_desc"
              id="categoryDes"
              cols="30"
              rows="10"
              placeholder="Write Description.."
              value={state.categoryDes}
            ></textarea>
            <p className="error">Please Provide category name</p>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Edit Category</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;

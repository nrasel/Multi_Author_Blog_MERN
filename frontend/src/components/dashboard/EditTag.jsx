import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { edit_tag, update_tag } from "../../store/actions/Dashboard/tagAction";

const EditTag = ({ history }) => {
  const { tagSlug } = useParams();
  const dispatch = useDispatch();
  const { editTag, editRequest, tagError, tagSuccessMessage } = useSelector(
    (state) => state.dashTagReducer
  );
  const [state, setState] = useState({
    tagName: "",
    tagDes: "",
  });

  useEffect(() => {
    if (editRequest) {
      setState({
        tagName: editTag?.tagName,
        tagDes: editTag?.tagDes,
      });
    } else {
      dispatch(edit_tag(tagSlug));
    }
    dispatch({
      type: "EDIT_REQUEST_CLEAR_TAG",
    });
  }, [tagSlug, editTag]);

  useEffect(() => {
    if (tagSuccessMessage) {
      history.push("/dashboard/all-tag");
    }
  }, [tagSuccessMessage]);
  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const updateTag = (e) => {
    e.preventDefault();
    dispatch(update_tag(editTag?._id, state));
  };

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
        <form onSubmit={updateTag}>
          <div className="form-group">
            <label htmlFor="category_name">Tag Name</label>
            <input
              value={state.tagName}
              onChange={inputHandler}
              type="text"
              placeholder="Tag Name"
              className="form-control"
              name="tagName"
              id="category_name"
            />
            <p className="error">{tagError && tagError.tagName}</p>
          </div>
          <div className="form-group">
            <label htmlFor="category_desc">Tag Description</label>
            <textarea
              value={state.tagDes}
              onChange={inputHandler}
              className="form-control"
              name="tagDes"
              id="category_desc"
              cols="30"
              rows="10"
              placeholder="Write Description.."
            ></textarea>
            <p className="error">{tagError && tagError.tagDes}</p>
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

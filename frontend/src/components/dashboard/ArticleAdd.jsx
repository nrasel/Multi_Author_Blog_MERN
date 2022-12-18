import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { BsCardImage } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get_tag_category } from "../../store/actions/Dashboard/articleAction";

const ArticleAdd = () => {
  const dispatch = useDispatch();
  const { allTag, allCategory } = useSelector((state) => state.articleReducer);
  const [text, setText] = useState("");
  const editor = useRef();

  // for all input field
  const [state, setState] = useState({
    title: "",
    category: "",
    tag: "",
    image: "",
  });
  // for slug
  const [slug, setSlug] = useState("");
  // show and hide update button
  const [updateBtn, setUpdateBtn] = useState(false);

  // all field handler
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  // for title handler
  const titleHandler = (e) => {
    setState({
      ...state,
      title: e.target.value,
    });
    // create slug using title value
    const createSlug = e.target.value.trim().split(" ").join("-");
    // set slug in slug state
    setSlug(createSlug);
  };

  // slug handle field
  const slugHandler = (e) => {
    setSlug(e.target.value);
    setUpdateBtn(true);
  };

  // update slug handler
  const updateSlug = (e) => {
    e.preventDefault();
    const newSlug = slug.trim().split(" ").join("-");
    setSlug(newSlug);
    setUpdateBtn(false);
  };

  console.log(state);
  const config = {
    readonly: false,
  };

  useEffect(() => {
    dispatch(get_tag_category());
  }, []);

  return (
    <div className="add-article">
      <Helmet>
        <title>Article Add</title>
      </Helmet>
      <div className="add">
        <div className="title-show-article">
          <h2>Add Article</h2>
          <Link className="btn" to="/dashboard/all-article">
            All Article
          </Link>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="title">Article title</label>
            <input
              onChange={titleHandler}
              value={state.title}
              type="text"
              name="title"
              placeholder="Article Title"
              className="form-control"
              id="title"
            />
            <p className="error">Please Provide article title</p>
          </div>
          <div className="form-group">
            <label htmlFor="slug">Article Slug</label>
            <input
              onChange={slugHandler}
              value={slug}
              type="text"
              className="form-control"
              placeholder="Article Slug"
              name="slug"
              id="slug"
            />
            <p className="error">Please Provide article slug</p>
          </div>
          {updateBtn ? (
            <button onClick={updateSlug} className="btn">
              Update
            </button>
          ) : (
            ""
          )}

          <div className="form-group">
            <label htmlFor="categoryadd">Category</label>
            <select
              onChange={inputHandle}
              value={state.category}
              className="form-control"
              name="category"
              id="categoryadd"
            >
              <option value="">--Select Article Category--</option>
              {allCategory.length > 0
                ? allCategory.map((c, index) => (
                    <option key={index} value={c.categorySlug}>
                      {c.categoryName}
                    </option>
                  ))
                : ""}
            </select>
            <p className="error">Please Provide article slug</p>
          </div>
          <div className="form-group">
            <label htmlFor="tag">Category</label>
            <select
              onChange={inputHandle}
              value={state.tag}
              className="form-control"
              name="tag"
              id="tag"
            >
              <option value="">--Select Article Tag--</option>
              {allTag.length > 0
                ? allTag.map((t, index) => (
                    <option key={index} value={t.tagSlug}>
                      {t.tagName}
                    </option>
                  ))
                : ""}
            </select>
            <p className="error">Please Provide article slug</p>
          </div>
          <div className="form-group img-upload">
            <div className="upload">
              <label htmlFor="uploadImage">
                <BsCardImage />
              </label>
              <input type="file" id="uploadImage" />
            </div>
            <label htmlFor="articleText">Article Text</label>
            <JoditEditor
              ref={editor}
              value={text}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newText) => setText(newText)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {}}
            />
            <p className="error">Please Provide article slug</p>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <div className="image-select">
              <span>Upload Image</span>
              <label htmlFor="image">Select Image</label>
              <input
                type="file"
                className="form-control"
                name="image"
                id="image"
              />
            </div>
            <div className="image">
              <img
                src="http://localhost:3000/articleImage/artificial.jpg"
                alt=""
              />
            </div>
            <p className="error">Please Provide Article Image</p>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Add Article</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleAdd;

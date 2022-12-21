import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { BsCardImage } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  add_article,
  get_tag_category,
} from "../../store/actions/Dashboard/articleAction";

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
  // for image handle state
  const [image, setImage] = useState({
    imageName: "",
    img: "",
  });

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

  // image handler
  const imageHandle = (e) => {
    // এখানে চেক করা হচ্ছে ইমেজ সিলেক্ট করা আছে কিনা
    if (e.target.files.length !== 0) {
      setState({
        ...state,
        image: e.target.files[0],
      });
      //এই ফাংশনটা দিয়ে মুলত ইমেজটা রিড করে ইস্টেট এর মদ্ধ্যে সেট করা হচ্ছে
      const imageReader = new FileReader();
      imageReader.onload = () => {
        setImage({
          ...image,
          img: imageReader.result,
          imageName: e.target.files[0].name,
        });
      };
      //এই ফাংশন এর ভিতর ইমেজ টা সেট করে দিলাম যেনো ইমেজ ইউ আর এল ক্র্যেট হয়
      imageReader.readAsDataURL(e.target.files[0]);
    }
  };

  const addArticle = (e) => {
    e.preventDefault();
    const { title, image, category, tag } = state;

    // ইমেজকে স্বাভাবিক অবস্থায় ব্যাকেন্ডে পাঠাতে পারবো না তাই ফরমডাটা ব্যাবহার করতে হবে
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("category", category);
    formData.append("tag", tag);
    formData.append("slug", slug);
    formData.append("text", text);
    dispatch(add_article(formData));
  };
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
        <form onSubmit={addArticle}>
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
            <label htmlFor="tags">Tag</label>
            <select
              onChange={inputHandle}
              value={state.tag}
              className="form-control"
              name="tag"
              id="tags"
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
              {image.imageName ? (
                <span>{image.imageName}</span>
              ) : (
                <span>Upload Image</span>
              )}
              <label htmlFor="image">Select Image</label>
              <input
                onChange={imageHandle}
                type="file"
                className="form-control"
                name="image"
                id="image"
              />
            </div>
            <div className="image">
              {image.img ? <img src={image.img} alt="" /> : ""}
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

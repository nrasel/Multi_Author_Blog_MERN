import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { BsCardImage } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  edit_article,
  get_tag_category,
  update_article,
} from "../../store/actions/Dashboard/articleAction";

const ArticleEdit = () => {
  const dispatch = useDispatch();
  const { articleSlug } = useParams();
  const {
    allTag,
    allCategory,
    loader,
    articleError,
    editRequest,
    editArticle,
    articleSuccessMessage,
  } = useSelector((state) => state.articleReducer);
  const [text, setText] = useState("");
  const editor = useRef();

  const [state, setState] = useState({
    title: "",
    category: "",
    tag: "",
  });

  // for slug handle
  const [slug, setSlug] = useState("");
  // slug button update
  const [updateBtn, setUpdateBtn] = useState(false);

  // for title handle
  const titleHandler = (e) => {
    setState({
      ...state,
      title: e.target.value,
    });
  };

  // for category and tag input handler
  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // slug update handler
  const updateSlug = (e) => {
    e.preventDefault();
    const newSlug = slug.trim().split(" ").join("-");
    setSlug(newSlug);
    setUpdateBtn(false);
  };

  // for slug handler
  const slugHandler = (e) => {
    setSlug(e.target.value);
    setUpdateBtn(true);
  };

  console.log(editArticle._id);
  useEffect(() => {
    if (editRequest) {
      setState({
        title: editArticle.title,
        category: editArticle.category_slug,
        tag: editArticle.tag_slug,
        articleId: editArticle._id,
      });

      setSlug(editArticle.slug);
      setText(editArticle.article_text);
    }
  }, [editArticle, editRequest]);
  useEffect(() => {
    dispatch(edit_article(articleSlug));
  }, [articleSlug]);

  const updateArticle = (e) => {
    e.preventDefault();
    const { title, category, tag, articleId } = state;

    dispatch(update_article({ title, category, tag, slug, text, articleId }));
  };

  useEffect(() => {
    dispatch(get_tag_category());
  }, []);

  const config = {
    readonly: false,
  };

  return (
    <div className="add-article">
      <Helmet>
        <title>Article Edit</title>
      </Helmet>
      <div className="add">
        <div className="title-show-article">
          <h2>Edit Article</h2>
          <Link className="btn" to="/dashboard/all-article">
            All Article
          </Link>
        </div>
        <form onSubmit={updateArticle}>
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
            <p className="error">{articleError && articleError.title}</p>
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
            <p className="error">{articleError && articleError.title}</p>
          </div>
          {updateBtn ? (
            <button onSubmit={updateSlug} className="btn">
              Update
            </button>
          ) : (
            ""
          )}

          <div className="form-group">
            <label htmlFor="categoryadd">Category</label>
            <select
              onChange={inputHandler}
              value={state.category}
              className="form-control"
              name="category"
              id="categoryadd"
            >
              <option value="">--Select Article Category--</option>
              {allCategory.length > 0
                ? allCategory.map((c, index) => {
                    return (
                      <option key={index} value={c.categorySlug}>
                        {c.categoryName}
                      </option>
                    );
                  })
                : ""}
            </select>
            <p className="error">{articleError && articleError.title}</p>
          </div>
          <div className="form-group">
            <label htmlFor="tags">Tag</label>
            <select
              onChange={inputHandler}
              value={state.tag}
              className="form-control"
              name="tag"
              id="tags"
            >
              <option value="">--Select Article Tag--</option>
              {allTag.length > 0
                ? allTag.map((t, index) => {
                    return (
                      <option key={index} value={t.tagSlug}>
                        {t.tagName}
                      </option>
                    );
                  })
                : ""}
            </select>
            <p className="error">{articleError && articleError.title}</p>
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
            <p className="error">{articleError && articleError.title}</p>
          </div>

          <div className="form-group">
            <button className="btn btn-block">Update Article</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleEdit;

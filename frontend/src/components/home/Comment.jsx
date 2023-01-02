import moment from "moment";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsFacebook, BsGoogle, BsTrash } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  get_comment,
  user_comment,
} from "../../store/actions/home/homeCommentAction";

const Comment = () => {
  const { userInfo } = useSelector((state) => state.adminReducer);
  const { readArticle } = useSelector((state) => state.homeReducer);
  const { loader, comment_message, comments } = useSelector(
    (state) => state.homeCommentReducer
  );

  // console.log(readArticle);
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");
  const [reply, setReply] = useState("");

  const commentSubmit = (e) => {
    e.preventDefault();
    const artObj = {
      articleId: readArticle._id,
      articleSlug: readArticle.slug,
      articleTitle: readArticle.title,
      userName: userInfo.name,
      userImage: userInfo.image,
      comment,
    };
    if (comment) {
      dispatch(user_comment(artObj));
    }
  };
  console.log(reply);

  useEffect(() => {
    if (comment_message) {
      toast.success(comment_message);
      dispatch({
        type: "COMMENT_MESSAGE_CLEAR",
      });
      dispatch(get_comment(readArticle._id));
    }
  }, [comment_message]);

  useEffect(() => {
    if (readArticle) {
      dispatch(get_comment(readArticle._id));
    }
  }, [readArticle]);

  return (
    <>
      <div className="comments">
        <Toaster
          position={"top-center"}
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "15px",
            },
          }}
        />
        {comments.length > 0
          ? comments.map((cm, index) => (
              <div key={index} className="main-reply-comment">
                <div className="image-comment-time-name">
                  <img src={cm.userImage} alt="" />
                  <div className="name-time-comment">
                    <div className="name-time">
                      <h4>{cm.userName}</h4>
                      <span>{moment(cm.updatedAt).fromNow()}</span>
                    </div>
                    <p>{cm.comment}</p>
                    <div className="reply-btn">
                      {userInfo && (
                        <button onClick={() => setReply(cm._id)}>Reply</button>
                      )}
                    </div>
                    <div
                      className={
                        reply === cm._id ? "reply-box show" : "reply-box"
                      }
                    >
                      <div className="image-input">
                        <img
                          src="http://localhost:3000/articleImage/artificial.jpg"
                          alt=""
                        />
                        <input
                          type="text"
                          required
                          placeholder="add a public reply"
                        />
                      </div>
                      <div className="reply-submit">
                        <button className="cancel">Cancel</button>
                        <button className="submit">Submit</button>
                      </div>
                    </div>
                    {cm.replyComment.length > 0 &&
                      cm.replyComment.map((rc, index) => (
                        <div className="reply-comment">
                          <div className="reply-comment-image-name-time">
                            <img
                              src="http://localhost:3000/articleImage/artificial.jpg"
                              alt=""
                            />
                            <div className="name-time-comment">
                              <div className="name-time">
                                <h4>Naimur Rahman</h4>
                                <span>10 day ago</span>
                              </div>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry
                              </p>
                              <div className="reply-btn">
                                {userInfo && <button>Reply</button>}
                              </div>
                              <div className="reply-box">
                                <div className="image-input">
                                  <img
                                    src="http://localhost:3000/articleImage/artificial.jpg"
                                    alt=""
                                  />
                                  <input
                                    type="text"
                                    required
                                    placeholder="add a public reply"
                                  />
                                </div>
                                <div className="reply-submit">
                                  <button className="cancel">Cancel</button>
                                  <button className="submit">Submit</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="action">
                            <BsTrash />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="action">
                  <BsTrash />
                </div>
              </div>
            ))
          : ""}
      </div>
      <div className="comment-submit">
        <h3>Give Your Comments</h3>
        {userInfo && userInfo.role === "user" ? (
          <form onSubmit={commentSubmit}>
            <div className="form-group">
              <textarea
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write something"
                className="form-control"
                name=""
                id=""
                cols="20"
                rows="10"
              ></textarea>
            </div>
            <div className="form-group">
              <button disabled={loader ? true : false} className="btn">
                Submit
              </button>
            </div>
          </form>
        ) : (
          <ul className="login-first">
            <li className="btn">
              <span>
                <BsFacebook />
              </span>
              <button className="btn">Login Facebook</button>
            </li>
            <li className="btn">
              <span>
                <FaLock />
              </span>
              <Link to="/login" className="btn">
                Login
              </Link>
            </li>
            <li className="btn">
              <span>
                <BsGoogle />
              </span>
              <button className="btn">Login Google</button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Comment;

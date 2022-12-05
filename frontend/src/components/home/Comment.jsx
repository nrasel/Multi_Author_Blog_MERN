import React from "react";
import { BsTrash } from "react-icons/bs";

const Comment = () => {
  return (
    <div className="comments">
      <div className="main-reply-comment">
        <div className="image-comment-time-name">
          <img src="http://localhost:3000/articleImage/artificial.jpg" alt="" />
          <div className="name-time-comment">
            <div className="name-time">
              <h4>Naimur Rahman</h4>
              <span>10 day ago</span>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <div className="reply-btn">
              <button>Reply</button>
            </div>
            <div className="reply-box">
              <div className="image-input">
                <img
                  src="http://localhost:3000/articleImage/artificial.jpg"
                  alt=""
                />
                <input type="text" required placeholder="add a public reply" />
              </div>
              <div className="reply-submit">
                
              </div>
            </div>
          </div>
        </div>
        <div className="action">
          <BsTrash />
        </div>
      </div>
    </div>
  );
};

export default Comment;

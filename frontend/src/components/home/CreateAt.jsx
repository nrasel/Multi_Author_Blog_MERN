import React from "react";
import { Link } from "react-router-dom";

const CreateAt = () => {
  return (
    <div id="copy-right">
      <div className="copy-right">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="left-side">
                <ul className="link-list">
                  <li>
                    <span>Created by</span>
                  </li>
                  <li>
                    <Link to="/">Naimur Rahman</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div className="right-side">
                <div className="link-list">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">About</Link>
                    </li>
                    <li>
                      <Link to="/">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAt;

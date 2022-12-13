import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="pagination">
      <ul>
        <li>
          <Link to="/">
            <BsChevronLeft />
          </Link>
        </li>
        <button className="not-hover" disabled>
          <span>
            <BsChevronLeft />
          </span>
        </button>
        <li className="active">
          <Link to="/">1</Link>
        </li>
        <li>
          <Link to="/">2</Link>
        </li>
        <li>
          <Link to="/">3</Link>
        </li>
        <li>
          <Link to="/">
            <BsChevronRight />
          </Link>
        </li>
        <button className="not-hover" disabled>
          <span>
            <BsChevronRight />
          </span>
        </button>
      </ul>
    </div>
  );
};

export default Pagination;

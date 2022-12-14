import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Pagination = ({ pageNumber, perPage, itemCount, path }) => {
  let totalPage = Math.ceil(itemCount / perPage);
  let startLink = pageNumber;
  let diff = totalPage - pageNumber;

  if (diff <= 4) {
    startLink = parseInt(totalPage) - 4;
  }
  let endLink = parseInt(startLink) + 4;
  if (startLink <= 0) {
    startLink = 1;
  }

  const createLink = () => {
    const storeLink = [];
    for (var i = startLink; i < endLink; i++) {
      storeLink.push(
        <li key={1} className={parseInt(pageNumber) === i ? "active" : ""}>
          <Link to={`${path}/page-${i}`}>{i}</Link>
        </li>
      );
    }
    return storeLink;
  };
  const nextPage = () => {
    if (pageNumber < totalPage) {
      return (
        <li>
          <Link to={`${path}/page-${parseInt(pageNumber) + 1}`}>
            <BsChevronRight />
          </Link>
        </li>
      );
    } else {
      return (
        <button className="not-hover" disabled>
          <span>
            <BsChevronRight />
          </span>
        </button>
      );
    }
  };

  const previousPage = () => {
    if (pageNumber > 1) {
      return (
        <li>
          <Link to={`${path}/page-${parseInt(pageNumber) - 1}`}>
            <BsChevronLeft />
          </Link>
        </li>
      );
    }
    return (
      <button className="not-hover" disabled>
        <span>
          <BsChevronLeft />
        </span>
      </button>
    );
  };

  return (
    <div className="pagination">
      {/* <ul>
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
      </ul> */}
      <ul>
        {previousPage()}
        {createLink()}
        {nextPage()}
      </ul>
    </div>
  );
};

export default Pagination;

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_all_tag } from "../../store/actions/Dashboard/tagAction";
import Pagination from "../home/Pagination";

const AllTag = () => {
  const dispatch = useDispatch();
  const { currentPage } = useParams();

  const { allTag, perPage, tagSuccessMessage, tagCount } = useSelector(
    (state) => state.dashTagReducer
  );

  useEffect(() => {
    dispatch(get_all_tag(currentPage ? currentPage.split("-")[1] : 1));
  }, [currentPage]);

  return (
    <div className="all-category">
      <Helmet>
        <title>All Tag</title>
      </Helmet>
      <div className="show-category-action">
        <div className="numof-search-newAdd">
          <div className="numof">
            <h2>Tag ({tagCount})</h2>
          </div>
          <div className="searchof">
            <div className="search">
              <input
                type="text"
                className="form-control"
                placeholder="Find Your Tag"
              />
            </div>
            <span>
              <FaSearch />
            </span>
          </div>
          <div className="newAdd">
            <Link className="btn" to="/dashboard/add-tag">
              Add New
            </Link>
          </div>
        </div>
        <div className="height-60vh">
          <div className="categories">
            {allTag.length > 0
              ? allTag.map((t, index) => (
                  <div key={index} className="category">
                    <div className="name">{t.tagName}</div>
                    <div className="action">
                      <span>
                        <Link to={`/dashboard/tag/edit/${t.tagSlug}`}>
                          <MdEdit />
                        </Link>
                      </span>
                      <span>
                        <MdDelete />
                      </span>
                    </div>
                  </div>
                ))
              : "Please Add Tag"}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default AllTag;

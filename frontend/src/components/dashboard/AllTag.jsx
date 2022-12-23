import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  delete_tag,
  get_all_tag,
} from "../../store/actions/Dashboard/tagAction";
import Pagination from "../home/Pagination";

const AllTag = () => {
  const dispatch = useDispatch();
  const { currentPage } = useParams();

  const { allTag, perPage, tagSuccessMessage, tagCount } = useSelector(
    (state) => state.dashTagReducer
  );

  useEffect(() => {
    if (tagSuccessMessage) {
      toast.success(tagSuccessMessage);
      dispatch({
        type: "TAG_DELETE_MESSAGE_CELAR",
      });
    }

    dispatch(get_all_tag(currentPage ? currentPage.split("-")[1] : 1));
  }, [currentPage, tagSuccessMessage]);

  return (
    <div className="all-category">
      <Toaster
        position={"top-center"}
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "15px",
          },
        }}
      />
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
                onChange={(e) =>
                  dispatch(
                    get_all_tag(
                      currentPage ? currentPage.split("-")[1] : 1,
                      e.target.value
                    )
                  )
                }
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
                      <span onClick={() => dispatch(delete_tag(t._id))}>
                        <MdDelete />
                      </span>
                    </div>
                  </div>
                ))
              : "Tag not found"}
          </div>
        </div>
        {tagCount === 0 || tagCount < perPage ? (
          ""
        ) : (
          <Pagination
            pageNumber={currentPage ? currentPage.split("-")[1] : 1}
            perPage={perPage}
            itemCount={tagCount}
            path="/dashboard/all-tag"
          />
        )}
      </div>
    </div>
  );
};

export default AllTag;

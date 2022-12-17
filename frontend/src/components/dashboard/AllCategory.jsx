import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { toast, Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  delete_category,
  get_all_category,
} from "../../store/actions/Dashboard/categoryAction";
import Pagination from "../home/Pagination";

const AllCategory = () => {
  const dispatch = useDispatch();
  const { currentPage } = useParams();

  const { perPage, allCatrgory, categoryCount, categorySuccessMessage } =
    useSelector((state) => state.dashCategoryReducers);

  useEffect(() => {
    if (categorySuccessMessage) {
      toast.success(categorySuccessMessage);
      dispatch({
        type: "CATEGORY_DELETE_MESSAGE_CLEAR",
      });
    }
    // get_all_category action er moddhe current page pathano holo (page-12) just ei number take neoa holo jodi number ta na thake taile 1 pass hobe
    dispatch(get_all_category(currentPage ? currentPage.split("-")[1] : 1));
  }, [currentPage,  categorySuccessMessage]);
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
        <title>All Category</title>
      </Helmet>
      <div className="show-category-action">
        <div className="numof-search-newAdd">
          <div className="numof">
            <h2>Category ({categoryCount})</h2>
          </div>
          <div className="searchof">
            <div className="search">
              <input
                type="text"
                className="form-control"
                placeholder="Find Your Category"
              />
            </div>
            <span>
              <FaSearch />
            </span>
          </div>
          <div className="newAdd">
            <Link className="btn" to="/dashboard/add-category">
              Add New
            </Link>
          </div>
        </div>
        <div className="height-60vh">
          <div className="categories">
            {allCatrgory.length > 0
              ? allCatrgory.map((c, index) => (
                  <div key={index} className="category">
                    <div className="name">{c.categoryName}</div>
                    <div className="action">
                      <span>
                        <Link to={`/dashboard/category/edit/${c.categorySlug}`}>
                          <MdEdit />
                        </Link>
                      </span>
                      <span onClick={() => dispatch(delete_category(c._id))}>
                        <MdDelete />
                      </span>
                    </div>
                  </div>
                ))
              : "Please Add Category"}
          </div>
        </div>
        <Pagination
          pageNumber={currentPage ? currentPage.split("-")[1] : 1}
          perPage={perPage}
          itemCount={categoryCount}
          path="/dashboard/all-category"
        />
      </div>
    </div>
  );
};

export default AllCategory;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { get_home_category } from "../../store/actions/home/homeAction";

const CategoryArticle = () => {
  const dispatch = useDispatch();
  // app.js and dashboard er vitor a query hisebe category slug and currentPage query disilam
  const { currentPage, categorySlug } = useParams();

  useEffect(() => {
    dispatch(
      get_home_category(
        categorySlug,
        currentPage ? currentPage.split("-")[1] : 1
      ),
      ""
    );
  }, [dispatch, currentPage, categorySlug]);
  return <h2>Category Article</h2>;
};

export default CategoryArticle;

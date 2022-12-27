import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const TagArticle = () => {
  const dispatch = useDispatch();
  const { currentPage, tagSlug } = useParams();
  console.log(currentPage, tagSlug);

  //   useEffect(() => {
  //     dispatch();
  //   }, []);
  return <h2>Tag Article</h2>;
};

export default TagArticle;

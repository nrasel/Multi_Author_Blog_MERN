import axios from "axios";

export const get_all_article_home =
  (currentPage, searchValue) => async (dispatch) => {
    try {
      const response = await axios.get(
        `/rest-api/home-article-get?currentPage=${currentPage}&&searchValue=${searchValue}`
      );

      dispatch({
        type: "HOME_ARTICLE_GET_SUCCESS",
        payload: {
          articles: response.data.articles,
          perPage: response.data.perPage,
          articleCount: response.data.countArticle,
        },
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const get_home_tag_category = () => async (dispatch) => {
  try {
    const response = await axios.get("/rest-api/home/get-tag-category");
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data);
  }
};

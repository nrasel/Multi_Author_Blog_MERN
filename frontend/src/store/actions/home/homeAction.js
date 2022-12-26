import axios from "axios";

export const get_all_article_home =
  (currentPage, searchValue) => async (dispatch) => {
    console.log(currentPage);
    try {
      const response = await axios.get(
        `/rest-api/home-article-get?currentPage=${currentPage}&&searchValue=${searchValue}`
      );
      console.log(response);
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

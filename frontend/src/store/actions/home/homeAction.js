import axios from "axios";

export const get_all_article_home =
  (currentPage, searchValue) => async (dispatch) => {
    try {
      const response = await axios.get(
        `/rest-api/home-article-get?currentPage=${currentPage}&&searchValue=${searchValue}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

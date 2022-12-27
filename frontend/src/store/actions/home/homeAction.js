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

    dispatch({
      type: "HOME_TAG_CATEGORY_GET",
      payload: {
        homeTag: response.data.allTag,
        homeCategory: response.data.allCategory,
      },
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const get_old_recent_article = () => async (dispatch) => {
  const response = await axios.get("/rest-api/article/recent-old-get");
  dispatch({
    type: "GET_OLD_RECENT_ARTICLE",
    payload: {
      oldArticle: response.data.oldArticle,
      recentArticle: response.data.recentArticle,
    },
  });
};

export const get_home_category =
  (categoyrSlug, currentPage) => async (dispatch) => {
    console.log(categoyrSlug, currentPage);
    try {
      const response = await axios.get(
        `/rest-api/get-home-category?categorySlug=${categoyrSlug}&&currentPage=${currentPage}`
      );
      dispatch({
        type: "CAT_ARTICLE_GET_SUCCESS",
        payload: {
          categoryArticle: response.data.categoryArticle,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

import axios from "axios";
export const get_tag_category = () => async (dispatch) => {
  try {
    const response = await axios.get("/rest-api/get-tag-category");

    dispatch({
      type: "GET_TAG_CATEGORY_SUCCESS",
      payload: {
        getTag: response.data.getTag,
        getCategory: response.data.getCategory,
      },
    });
  } catch (error) {
    console.log(error.response);
  }
};
export const add_article = (data) => async (dispatch) => {
  dispatch({
    type: "SET_LOADER_ARTICLE",
  });
  try {
    const response = await axios.post("/rest-api/article-add", data);
    dispatch({
      type: "ARTICLE_ADD_SUCCESS",
      payload: {
        successMessage: response.data.successMessage,
      },
    });
  } catch (error) {
    dispatch({
      type: "ARTICLE_ADD_FAIL",
      payload: {
        errorMessage: error.response.data.errorMessage,
      },
    });
  }
};

export const get_all_article =
  (currentPage, searchValue) => async (dispatch) => {
    try {
      const response = await axios.get(
        `/rest-api/get-article?currentPage=${currentPage}&&searchValue=${searchValue}`
      );

      dispatch({
        type: "DASH_ARTICLE_GET_SUCCESS",
        payload: {
          allArticle: response.data.allArticle,
          articleCount: response.data.articleCount,
          perPage: response.data.perPage,
        },
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

export const edit_article = (articleSlug) => async (dispatch) => {
  try {
    const response = await axios.get(`/rest-api/edit-article/${articleSlug}`);
    dispatch({
      type: "EDIT_ARTICLE_GET_SUCCESS",
      payload: {
        editArticle: response.data.editArticle,
      },
    });
    dispatch({
      type: "EDIT_ARTICLE_REQUEST_SET",
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const update_article = (data) => async (dispatch) => {
  try {
    const response = await axios.post("/rest-api/update-article", data);
    dispatch({
      type: "ARTICLE_UPDATE_SUCCESSFUL",
      payload: {
        successMessage: response.data.successMessage,
      },
    });
  } catch (error) {
    dispatch({
      type: "ARTICLE_UPDATE_FAIL",
      payload: {
        errorMessage: error.response.data.errorMessage,
      },
    });
  }
};

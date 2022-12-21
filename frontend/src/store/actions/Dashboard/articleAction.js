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

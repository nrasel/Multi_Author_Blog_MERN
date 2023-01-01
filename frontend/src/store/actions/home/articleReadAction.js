import axios from "axios";
export const get_article_details = (articleSlug) => async (dispatch) => {
  try {
    const response = await axios.get(
      `/rest-api/article-details/${articleSlug}`
    );

    dispatch({
      type: "ARTICLE_DETAILS_GET_SUCCESS",
      payload: {
        readArticle: response.data.readArticle,
        moreTag: response.data.moreTag,
        relatedArticle: response.data.relatedArticle,
        readMoreArticle: response.data.readMoreArticle,
      },
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const like_dislike_get = (articleSlug) => async (dispatch) => {
  try {
    const response = await axios.get(
      `/rest-api/like-dislike-get/${articleSlug}`
    );
    dispatch({
      type: "LIKE_DISLIKE_GET_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const user_article_like = (data) => async (dispatch) => {
  try {
    const response = await axios.put("/rest-api/user-like-article", data);

    dispatch({
      type: "USER_LIKE_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const user_article_dislike = (data) => async (dispatch) => {
  try {
    const response = await axios.put("/rest-api/user-dislike-article", data);
    dispatch({
      type: "USER_DISLIKE_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

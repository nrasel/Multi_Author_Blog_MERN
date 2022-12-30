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
    console.log(response.data);
  } catch (error) {}
};

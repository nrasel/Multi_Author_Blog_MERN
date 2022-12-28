import axios from "axios";
export const get_article_details = (articleSlug) => async (dispatch) => {
  try {
    const response = await axios.get(
      `/rest-api/article-details/${articleSlug}`
    );
    console.log(response.data);

    dispatch({
      type: "ARTICLE_DETAILS_GET_SUCCESS",
      payload: {
        readArticle: response.data.readArticle,
        moreTag: response.data.moreTag,
        relatedArticle: response.data.relatedArticle,
        readMoreArticle: response.data.readMoreArticle,
      },
    });
  } catch (error) {}
};

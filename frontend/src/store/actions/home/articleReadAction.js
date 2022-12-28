import axios from "axios";
export const get_article_details = (articleSlug) => async (dispatch) => {
  try {
    const response = await axios.get(
      `/rest-api/article-details/${articleSlug}`
    );
    console.log(response.data);
  } catch (error) {}
};

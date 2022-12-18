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

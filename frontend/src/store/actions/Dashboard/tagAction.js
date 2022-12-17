import axios from "axios";

export const add_tag = (data) => async (dispatch) => {
  dispatch({
    type: "SET_LOADER_TAG",
  });
  try {
    const response = await axios.post("/rest-api/add-tag", data);
    dispatch({
      type: "TAG_ADD_SUCCESS",
      payload: {
        successMessage: response.data.successMessage,
      },
    });
  } catch (error) {
    console.log(error.response.data.errorMessage);
    dispatch({
      type: "TAG_ADD_FAIL",
      payload: {
        error: error.response.data.errorMessage,
      },
    });
  }
};

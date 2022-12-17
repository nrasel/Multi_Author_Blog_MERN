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

export const get_all_tag = (page, searchValue) => async (dispatch) => {
  console.log(page);
  try {
    const response = await axios.get(
      `/rest-api/get-tag?page=${page}&&searchValue=${searchValue}`
    );
    console.log(response.data);
    dispatch({
      type: "DASHBOARD_TAG_GET_SUCCESS",
      payload: {
        allTag: response.data.allTag,
        perPage: response.data.perPage,
        tagCount: response.data.tagCount,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
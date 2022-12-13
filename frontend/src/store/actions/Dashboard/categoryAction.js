import axios from "axios";

export const add_Category = (data) => async (dispatch) => {
  dispatch({ type: "SET_LOADER" });
  try {
    const response = await axios.post("/rest-api/add-category", data);
    console.log(response);
    dispatch({
      type: "CATEGORY_ADD_SUCCESS",
      payload: {
        successMessage: response.data.successMessage,
      },
    });
  } catch (error) {
    dispatch({
      type: "CATEGORY_ADD_FAIL",
      payload: {
        error: error.response.data.errorMessage,
      },
    });
  }
};

export const get_all_category = (page, searchValue) => async (dispatch) => {
  console.log(page);
  try {
    //পেজিনেশন করার জন্য মূলত পেজ নাম্বার এবং সার্চ ভেলু পাঠানো হচ্ছে।
    const response = await axios.get(
      `/res-api/get-category?page=${page}&&searchValue=${searchValue}`
    );
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
};

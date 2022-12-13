import axios from "axios";

export const add_Category = (data) => async (dispatch) => {
  dispatch({ type: "SET_LOADER" });
  try {
    const response = await axios.post("/rest-api/add-category", data);

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
  try {
    //পেজিনেশন করার জন্য মূলত পেজ নাম্বার এবং সার্চ ভেলু পাঠানো হচ্ছে।
    const response = await axios.get(
      `/rest-api/get-category?page=${page}&&searchValue=${searchValue}`
    );
    dispatch({
      type: "DASHBOARD_CATEGORY_GET_SUCCESS",
      payload: {
        allCategory: response.data.allCategory,
        perPage: response.data.perPage,
        categoryCount: response.data.categoryCount,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
};

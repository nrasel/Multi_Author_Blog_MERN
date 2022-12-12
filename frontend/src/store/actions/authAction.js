import axios from "axios";
// higher order function
export const admin_login = (data) => async (dispatch) => {
  dispatch({
    type: "LOADER_RUN",
  });

  try {
    const response = await axios.post("/rest-api/admin-login", data);
    localStorage.setItem("blog_token", response.data.token);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        successMessage: response.data.successMessage,
        token: response.data.token,
      },
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: {
        error: error.response.data.errorMessage,
      },
    });
  }
};

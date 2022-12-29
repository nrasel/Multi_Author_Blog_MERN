import axios from "axios";
// higher order function
export const admin_login = (data) => async (dispatch) => {
  // এই টাইপ টা ডিসপ্যাচ করে রিডিউচার এর মধ্যে পাঠাচ্ছি।যেইটা একশন এর মধ্যে পাচ্ছি।
  dispatch({
    type: "LOADER_RUN",
  });

  try {
    const response = await axios.post("/rest-api/admin-login", data);
    console.log(response);
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

export const register = (data) => async (dispatch) => {
  dispatch({
    type: "LOADER_RUN",
  });
  try {
    const response = await axios.post("/rest-api/register", data);
    dispatch({
      type: "OTP_SEND_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "REGISTER_ERROR",
      payload: error.response.data.errorMessage,
    });
  }
};
export const email_verify = (otp) => async (dispatch) => {
  dispatch({ type: "LOADER_RUN" });

  try {
    const response = await axios.post(`/rest-api/verify-email`, { otp });
  

    localStorage.setItem("blog_token", response.data.token);
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "REGISTER_ERROR",
      payload: error.response.data.errorMessage,
    });
  }
};

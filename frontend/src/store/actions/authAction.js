import axios from "axios";
// higher order function
export const admin_login = (data) => async (dispatch) => {
  dispatch({
    type: "LOADER_RUN",
  });

  try {
    const response = await axios.post("/rest-api/admin-login", data);
    console.log(response);
  } catch (error) {
    console.log(error.response);
    console.log(error.response);
  }
};

import axios from "axios";
export const user_comment = (data) => async (dispatch) => {
  console.log(data);
  try {
    const response = axios.post("/rest-api/user-comment", data);
    console.log(response.data)
  } catch (error) {
    console.log(error.response.data);
  }
};

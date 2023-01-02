import axios from "axios";
export const user_comment = (data) => async (dispatch) => {
  console.log(data);
  try {
    const response = await axios.post("/rest-api/user-comment", data);
    console.log(response);
  } catch (error) {
    console.log(error.response.data);
  }
};

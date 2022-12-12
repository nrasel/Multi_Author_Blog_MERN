import axios from "axios";

export const add_Category = (data) => async (dispatch) => {
  try {
    const response = await axios.post("/rest-api/add-category", data);
    console.log(response);
  } catch (error) {
    console.log(error.response.data.errorMessage);
  }
};

import axios from "axios";
export const user_comment = (data) => async (dispatch) => {
  dispatch({
    type:'COMMENT_LOADER'
  })
  console.log(data);
  try {
    const response = await axios.post("/rest-api/user-comment", data);
    dispatch({
      type:'COMMENT_SUCCESS',
      payload:response.data
    })
    
  } catch (error) {
    console.log(error.response.data);
  }
};

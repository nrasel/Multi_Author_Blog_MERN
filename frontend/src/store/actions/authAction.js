import axios from 'axios'

// higher order function
export const admin_login = (data) => (dispatch) => {
  dispatch({
    type: "LOADER_RUN",
  });

  try {
    // const response =await axios.post()
  } catch (error) {
    console.log(error);
  }
  console.log(data);
};

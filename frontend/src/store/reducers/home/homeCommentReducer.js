const initState = {
  loader: false,
  comments: [],
  comment_message: "",
  comment_error: "",
};
export const homeCommentReducer = (state = initState, action) => {
  const { type, payload } = action;

  if (type === "COMMENT_LOADER") {
    return {
      ...state,
      loader: true,
    };
  }
  if (type === "COMMENT_SUCCESS") {
    return {
      ...state,
      comment_message: payload.successMessage,
      loader: false,
    };
  }
  if (type === "COMMENT_MESSAGE_CLEAR") {
    return {
      ...state,
      comment_message: "",
    };
  }
  if (type === "COMMENT_GET_SUCCESS") {
    return {
      ...state,
      comments: payload.comment,
    };
  }
  return state;
};

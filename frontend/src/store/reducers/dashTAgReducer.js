const tagState = {
  loader: false,
  tagError: "",
  tagSuccessMessage: "",
};

export const tagReducer = (state = tagState, action) => {
  const { type, payload } = action;

  if (type === "SET_LOADER_TAG") {
    return {
      ...state,
      loader: true,
    };
  }
  if (type === "TAG_ADD_SUCCESS") {
    return {
      ...state,
      loader: false,
      tagSuccessMessage: payload.successMessage,
      tagError: "",
    };
  }

  if (type === "TAG_SUCCESS_MESSAGE_CLEAR") {
    return {
      ...state,
      tagSuccessMessage: "",
    };
  }
  if (type === "TAG_ADD_FAIL") {
    return {
      ...state,
      loader: false,
      tagError: payload.error,
      tagSuccessMessage: "",
    };
  }

  if (type === "TAG_ERROR_MESSAGE_CLEAR") {
    return {
      ...state,
      tagError: "",
    };
  }

  return state;
};

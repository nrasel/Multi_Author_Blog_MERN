const tagState = {
  loader: false,
  tagError: "",
  tagSuccessMessage: "",
};

export const tagReducer = (state = tagState, action) => {
  const { type, payload } = action;

  if (type === "SET_LOADER") {
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
    };
  }

  if (type === "TAG_ADD_FAIL") {
    return {
      ...state,
      loader: false,
      tagError: payload.error,
    };
  }
  return state;
};

const iniiState = {
  authenticate: false,
  userInfo: "",
  errorMessage: "",
  successMessage: "",
  loader: false,
};

export const adminReducer = (state = iniiState, action) => {
  const { payload, type } = action;

  if (type === "LOADER_RUN") {
    return {
      ...state,
      loader: true,
    };
  }
  return state;
};

const categoryState = {
  loader: false,
  categoryError: "",
  categorySuccessMessage: "",
  allCatrgory: [],
  perPage: 0,
  categoryCount: 0,
};

export const dashCategoryReducers = (state = categoryState, action) => {
  const { type, payload } = action;

  if (type === "SET_LOADER") {
    return {
      ...state,
      loader: true,
    };
  }
  if (
    type === "CATEGORY_ADD_SUCCESS" ||
    type === "CATEGORY_DELETE_SUCCESS_MESSEGE"
  ) {
    return {
      ...state,
      loader: false,
      categorySuccessMessage: payload.successMessage,
      categoryError: "",
    };
  }
  if (type === "DASHBOARD_CATEGORY_GET_SUCCESS") {
    return {
      ...state,
      allCatrgory: payload.allCategory,
      perPage: payload.perPage,
      categoryCount: payload.categoryCount,
    };
  }
  if (
    type === "CATEGORY_SUCCESS_MESSAGE_CLEAR" ||
    type === "CATEGORY_DELETE_MESSAGE_CLEAR"
  ) {
    return {
      ...state,
      categorySuccessMessage: "",
    };
  }
  if (type === "CATEGORY_ADD_FAIL") {
    return {
      ...state,
      loader: false,
      categoryError: payload.error,
      categorySuccessMessage: "",
    };
  }
  if (type === "CATEGORY_ERROR_MESSAGE_CLEAR") {
    return {
      ...state,
      categoryError: "",
    };
  }
  return state;
};

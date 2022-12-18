const initState = {
  allTag: [],
  allCategory: [],
};

export const articleReducer = (state = initState, action) => {
  const { type, payload } = action;

  if (type === "GET_TAG_CATEGORY_SUCCESS") {
    return {
      ...state,
      allTag: payload.getTag,
      allCategory: payload.getCategory,
    };
  }
  return state;
};

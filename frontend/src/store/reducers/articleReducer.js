const initState = {
  loader: false,
  articleError: "",
  allArticle: [],
  articleCount: 0,
  perPage: 0,
  editArticle: "",
  articleSuccessMessage: "",
  editRequest: false,
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
  if (type === "SET_LOADER_ARTICLE") {
    return {
      ...state,
      loader: true,
    };
  }
  if (type === "ARTICLE_ADD_SUCCESS" || type === "ARTICLE_UPDATE_SUCCESSFUL") {
    return {
      ...state,
      loader: false,
      articleError: "",
      articleSuccessMessage: payload.successMessage,
    };
  }

  if (type === "ARTICLE_ADD_FAIL" || type === "ARTICLE_UPDATE_FAIL") {
    return {
      ...state,
      loader: false,
      articleError: payload.errorMessage,
      articleSuccessMessage: "",
    };
  }
  if (type === "ARTICLE_SUCCESS_MESSAGE_CLEAR") {
    return {
      ...state,
      articleSuccessMessage: "",
    };
  }

  if (type === "DASH_ARTICLE_GET_SUCCESS") {
    return {
      ...state,
      allArticle: payload.allArticle,
      perPage: payload.perPage,
      articleCount: payload.articleCount,
    };
  }

  if (type === "EDIT_ARTICLE_GET_SUCCESS") {
    return {
      ...state,
      editArticle: payload.editArticle,
    };
  }
  if (type === "EDIT_ARTICLE_REQUEST_SET") {
    return { ...state, editRequest: true };
  }
  return state;
};

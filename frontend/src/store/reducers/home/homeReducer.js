const initState = {
  allArticle: [],
  perPage: 0,
  articleCount: 0,
};

export const homeReducer = (state = initState, action) => {
  const { type, payload } = action;

  if (type === "HOME_ARTICLE_GET_SUCCESS") {
    return {
      ...state,
      allArticle: payload.articles,
      perPage: payload.perPage,
      articleCount: payload.articleCount,
    };
  }
  return state;
};

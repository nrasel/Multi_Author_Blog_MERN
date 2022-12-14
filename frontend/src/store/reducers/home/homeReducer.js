const initState = {
  allArticle: [],
  perPage: 0,
  articleCount: 0,
  allTag: [],
  allCategory: [],
  oldArticle: [],
  recentArticle: [],
  categoryArticle: [],
  tagArticle: [],
  readMore: "",
  readArticle: "",
  moreTag: [],
  relatedArticle: [],
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
  if (type === "HOME_TAG_CATEGORY_GET") {
    return {
      ...state,
      allTag: payload.homeTag,
      allCategory: payload.homeCategory,
    };
  }
  if (type === "GET_OLD_RECENT_ARTICLE") {
    return {
      ...state,
      oldArticle: payload.oldArticle,
      recentArticle: payload.recentArticle,
    };
  }
  if (type === "CAT_ARTICLE_GET_SUCCESS") {
    return {
      ...state,
      categoryArticle: payload.categoryArticle,
      perPage: payload.perPage,
      articleCount: payload.countCatArticle,
    };
  }
  if (type === "TAG_ARTICLE_GET_SUCCESS") {
    return {
      ...state,
      tagArticle: payload.tagArticle,
      articleCount: payload.countTagArticle,
      perPage: payload.perPage,
    };
  }
  if (type === "ARTICLE_DETAILS_GET_SUCCESS") {
    return {
      ...state,
      readMore: payload.readMoreArticle,
      relatedArticle: payload.relatedArticle,
      moreTag: payload.moreTag,
      readArticle: payload.readArticle,
    };
  }
  return state;
};

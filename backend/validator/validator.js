module.exports.article_validator = (data, files) => {
  const { title, category, tag, slug, text } = data;

  let error = {};
  if (!title) {
    error.title = "Please Provide article title";
  }
  if (!category) {
    error.category = "Please Provide article category";
  }
  if (!tag) {
    error.tag = "Please Provide article tag";
  }
  if (!slug) {
    error.slug = "Please Provide article slug";
  }
  if (!text) {
    error.text = "Please Provide article text";
  }

  if (Object.keys(files).length === 0) {
    error.image = "Please Provide article image";
  }

  if (Object.keys(error).length === 0) {
    return {
      validated: true,
    };
  } else {
    return {
      validated: false,
      error: error,
    };
  }
};

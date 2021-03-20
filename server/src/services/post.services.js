const { Post } = require('../models');

const create = async (data) => {
  try {
    const post = await Post.create(data);

    return post;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
};

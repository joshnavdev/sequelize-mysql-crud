const { Post } = require('../models');

const create = async (req, res) => {
  try {
    const { content } = req.body;

    const post = await Post.create({ content });

    res.status(201).json(post);
  } catch (error) {}
};

module.exports = {
  create,
};

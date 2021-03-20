const _ = require('lodash');
const postServices = require('../services/post.services');

const create = async (req, res) => {
  try {
    if (_.isEmpty(req.body)) {
      return res.status(400).json({ message: 'Solicitud incorrecta' });
    }

    const { content } = req.body;
    const post = await postServices.create({ content });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      message: 'Ocurrio un error en el servidor',
      error: error.message,
    });
  }
};

module.exports = {
  create,
};

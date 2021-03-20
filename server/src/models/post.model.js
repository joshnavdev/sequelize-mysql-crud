module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    content: DataTypes.STRING,
  });

  Post.associate = function (model) {};

  return Post;
};

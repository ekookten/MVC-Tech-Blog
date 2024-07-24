const Blog = require('./Blog')
const User = require('./User')
const Comment = require('./Comment')

Blog.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
  });
  
  Blog.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE',
  });
  
  Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
  });
  
  module.exports = {
    User,
    Blog,
    Comment,
  };
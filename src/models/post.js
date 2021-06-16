const { DataTypes } = require('sequelize');
const sequelize = require('../loaders/sequelize')

const Post = sequelize.define('Posts', {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image:{
    type: DataTypes.STRING,
    allowNull: true 
  },
  category:{
    type: DataTypes.STRING,
    allowNull: true
  }

}, {
  // Other model options go here
});

module.exports = Post;
const { DataTypes } = require('sequelize');
const sequelize = require('../loaders/sequelize');

const Post = sequelize.define('Posts', {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  content: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  image:{
    type: DataTypes.STRING(250),
    allowNull: true 
  },
  category:{
    type: DataTypes.STRING,
    allowNull: true
  },
  creationDate:{
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = Post;


Post.belongsTo(require('./categoryTypes'),{
  foreignKey: 'categoryTypeId',
  targetKey: 'id'
});
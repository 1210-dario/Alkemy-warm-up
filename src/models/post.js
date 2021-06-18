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
  creationDate:{
    type: DataTypes.DATEONLY,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = Post;

//Un Post tiene 1 categoría 
//Se añade una Fk (categoryTypeId) a la tabla Posts
Post.belongsTo(require('./categoryTypes'),{
  foreignKey: 'categoryTypeId',
  targetKey: 'id'
});
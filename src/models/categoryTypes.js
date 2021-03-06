const { DataTypes } = require('sequelize');
const sequelize = require('../loaders/sequelize');

const CategoryType = sequelize.define('CategoryType', {
    // Model attributes are defined here
    description: {
      type: DataTypes.STRING(50),
      allowNull: false
    }  
  }, {
    timestamps: false
});

module.exports = CategoryType;

//Una categoría tiene muchos post o publicaciones
//Se añade una Fk (categoryTypeId) a la tabla Posts
CategoryType.hasMany(require('./post'), {
  foreignKey: 'categoryTypeId',
  sourceKey:'id'
}); 



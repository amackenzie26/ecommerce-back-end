const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      isInt: true,    
      notNull: true,
      primaryKey: true,
      autoIncrement: true 
    }
  },
  {
    category_name: {
      isAlpha: true,   
      notNull: true, 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

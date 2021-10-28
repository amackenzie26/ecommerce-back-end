const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      isInt: true,    
      notNull: true,
      primaryKey: true,
      autoIncrement: true 
    }
  },
  {
    product_id: {
      isInt: true,    
      //references the product models id
    }
  },
  {
    tag_id: {
      isInt: true,    
      // references the tag model's id
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;

// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      isInt: true,    
      notNull: true,
      primaryKey: true,
      autoIncrement: true 
    }
  },
  {
    product_name: {
      isAlpha: true,    
      notNull: true,
    }
  },
  {
    price: {
      //decimal    
      notNull: true,
      //validates decimal
    }
  },
  {
    product_name: {
      isInt: true,    
      notNull: true,
      //set default value of 10
      isNumeric: true,
    }
  },
  {
    category_id: {
      isInt: true,    
      //references the Categoy model's id
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

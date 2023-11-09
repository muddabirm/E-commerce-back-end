const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');

class ProductTag extends Model {}

ProductTag.init(
  {
    id:{
      type:INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,

    },
    product_id:{
      type:INTEGER,
      references:{
        model: Product,
        key:'id',
      }
    }
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

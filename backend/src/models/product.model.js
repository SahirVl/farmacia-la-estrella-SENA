const { Model, DataTypes } = require("sequelize");

const PRODUCT_TABLE = "products";

const ProductShema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "categories",
      key: "id",
    },
  },
  supplier: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
};

class Product extends Model {
  static associate(models) {
  
  //this.belongsTo(models.User, { as: "supplier", foreignKey: "supplierId" });
  this.belongsTo(models.Category, { as: "category", foreignKey: "categoryId" });
  this.hasMany(models.OrderDetail, { as: "orderDetails", foreignKey: "productId" });

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: "Product",
    };
  }
}
module.exports = { PRODUCT_TABLE, ProductShema, Product };

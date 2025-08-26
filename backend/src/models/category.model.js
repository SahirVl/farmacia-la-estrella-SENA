const { Model, DataTypes } = require("sequelize");

const CATEGORY_TABLE = "categories";

const CategorySchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
};

class Category extends Model {
  static associate(models) {
    this.hasMany(models.Product, { as: "products", foreignKey: "categoryId" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: "Category",
    };
  }
}
module.exports = { CATEGORY_TABLE, CategorySchema, Category };

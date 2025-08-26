const { Model, DataTypes } = require("sequelize");

const ORDER_DETAIL_TABLE = "order_details";

const OrderDetailSchema = {
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    unitPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    }
  }

class OrderDetail extends Model {
  static associate(models) {
  this.belongsTo(models.Order, { as: "order", foreignKey: "orderId" });
  this.belongsTo(models.Product, { as: "product", foreignKey: "productId" });

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_DETAIL_TABLE,
      modelName: "OrderDetail",
    };
  }
}
module.exports = { ORDER_DETAIL_TABLE, OrderDetailSchema, OrderDetail };

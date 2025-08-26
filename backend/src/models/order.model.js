const { Model, DataTypes } = require("sequelize");

const ORDER_TABLE = "orders";

const OrderSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id",
    },
  },
  status: {
    type: DataTypes.ENUM(
      "pending",
      "paid",
      "shipped",
      "delivered",
      "cancelled"
    ),
    allowNull: false,
    defaultValue: "pending",
  },
  totalAmount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deliveryAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  deliveryDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
};

class Order extends Model {
  static associate(models) {
  this.belongsTo(models.User, { as: "customer", foreignKey: "userId" });
  this.hasMany(models.OrderDetail, { as: "orderDetails", foreignKey: "orderId" });
  this.hasOne(models.Invoice, { as: "invoice", foreignKey: "orderId" });

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: "Order",
    };
  }
}
module.exports = { ORDER_TABLE, OrderSchema, Order };

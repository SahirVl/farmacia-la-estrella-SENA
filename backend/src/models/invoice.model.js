const { Model, DataTypes } = require("sequelize");

const INVOICE_TABLE = "invoices";

const InvoiceSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: "orders",
      key: "id",
    },
  },
  invoiceNumber: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
  },
  issueDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  totalAmount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  taxAmount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

class Invoice extends Model {
  static associate(models) {
    this.belongsTo(models.Order, { as: "order", foreignKey: "orderId" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: INVOICE_TABLE,
      modelName: "Invoice",
    };
  }
}
module.exports = { INVOICE_TABLE, InvoiceSchema, Invoice };

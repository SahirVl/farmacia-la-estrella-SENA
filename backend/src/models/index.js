const { Category, CategorySchema } = require("./category.model");
const { Invoice, InvoiceSchema } = require("./invoice.model");
const { OrderDetail, OrderDetailSchema } = require("./order-detail.model");
const { Order, OrderSchema } = require("./order.model");
const { Product, ProductShema } = require("./product.model");
const { User, UserSchema } = require("./user.model");

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductShema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderDetail.init(OrderDetailSchema, OrderDetail.config(sequelize));
  Invoice.init(InvoiceSchema, Invoice.config(sequelize));

  //  Aqui definimos asociaciones
  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models)
  Order.associate(sequelize.models);
  OrderDetail.associate(sequelize.models);
  Invoice.associate(sequelize.models);
  
}

module.exports = setupModels;

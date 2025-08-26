const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const USER_TABLE = "users";

const UserSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  documentNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [5, 20],
      is: /^[0-9\-]+$/, // Acepta números con guiones, como NIT colombiano
    },
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8],
        msg: "La contraseña debe tener al menos 8 caracteres.",
      },
    },
  },
  role: {
    type: DataTypes.ENUM("customer", "admin", "pharmacist"),
    allowNull: false,
    defaultValue: "customer",
  },
  address: {
    type: DataTypes.STRING,

  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[0-9\-+() ]*$/,
    },
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

class User extends Model {
  static associate(models) {
    //this.hasMany(models.Product, { as: "products", foreignKey: "supplierId" });
    this.hasMany(models.Order, { as: "orders", foreignKey: "userId" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      hooks: {
        beforeSave: async (user) => {
          const password = await bcrypt.hash(user.password, 10);
          user.password = password;
        },
      },
    };
  }
}
module.exports = { USER_TABLE, UserSchema, User };

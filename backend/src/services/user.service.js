const { User } = require("../models/user.model");

class UserService {
  
  async create(data) {
    const newUser = await User.create(data);
    return newUser;
  }

  async find() {
    const users = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    return users;
  }

  async update(id, data) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("Usuario no encontrado"); 
  
    }
    await user.update(data)

    const updatedUser = user.get({ plain: true });
    delete updatedUser.password;
    return updatedUser;
  }
}


/*async register(data) {
  // Creamos el usuario
    const user = await User.create({
      email: data.email,
      password: data.password,
      rol: 'customer' 
    });
    // Creamos el cliente físico y lo vinculamos
    const customer = await Customer.create({
      id: data.id,
      fullName: data.fullName,
      address: data.address,
      phone: data.phone,
      userId: user.id
    });

    delete user.dataValues.password;

    return { user, customer };
  }


  async find() {
    const customer = await Customer.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: Customer.sequelize.models.User,
          as: "user", // alias usado en la asociación
          attributes: {
            exclude: ["password"],
          },
        },
      ],
    });
    return customer;
  }
}*/


module.exports = UserService;

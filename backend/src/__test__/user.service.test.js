// src/__test__/user.service.test.js
const UserService = require("../services/user.service");
const { User } = require("../models/user.model");

// Mockear métodos de Sequelize
jest.mock("../models/user.model", () => ({
  User: {
    create: jest.fn(),
    findAll: jest.fn(),
    findByPk: jest.fn(),
  },
}));

describe("UserService", () => {
  let service;

  beforeEach(() => {
    service = new UserService(); // usa el User real, pero mockeado
  });

  test("create() debe crear un usuario", async () => {
    const data = { email: "test@test.com", password: "1234" };
    User.create.mockResolvedValue(data);

    const result = await service.create(data);

    expect(User.create).toHaveBeenCalledWith(data);
    expect(result).toEqual(data);
  });

  test("find() debe devolver usuarios sin password", async () => {
    const users = [{ id: 1, email: "test@test.com" }];
    User.findAll.mockResolvedValue(users);

    const result = await service.find();

    expect(User.findAll).toHaveBeenCalled();
    expect(result).toEqual(users);
  });

  test("update() debe actualizar un usuario existente", async () => {
    const user = {
      update: jest.fn(),
      get: jest.fn().mockReturnValue({ id: 1, email: "nuevo@test.com" }),
    };
    User.findByPk.mockResolvedValue(user);

    const result = await service.update(1, { email: "nuevo@test.com" });

    expect(User.findByPk).toHaveBeenCalledWith(1);
    expect(user.update).toHaveBeenCalledWith({ email: "nuevo@test.com" });
    expect(result).toEqual({ id: 1, email: "nuevo@test.com" });
  });
});

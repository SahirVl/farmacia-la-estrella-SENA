// backend/src/__tests__/user.service.test.js
const UserService = require("../services/user.service");

describe("UserService", () => {
  let mockUser;
  let service;

  beforeEach(() => {
    // Mock del modelo User
    mockUser = {
      create: jest.fn(),
      findAll: jest.fn(),
      findByPk: jest.fn(),
    };

    // Inyectamos el mock en el servicio
    service = new UserService();
    service.User = mockUser;
  });

  test("create() debe crear un usuario", async () => {
    const data = { email: "test@test.com", password: "1234" };
    mockUser.create.mockResolvedValue(data);

    const result = await service.create(data);

    expect(mockUser.create).toHaveBeenCalledWith(data);
    expect(result).toEqual(data);
  });

  test("find() debe devolver usuarios sin password", async () => {
    const users = [{ id: 1, email: "test@test.com", password: "1234" }];
    mockUser.findAll.mockResolvedValue(users);

    const result = await service.find();

    expect(mockUser.findAll).toHaveBeenCalled();
    expect(result[0].password).toBeUndefined();
  });

  test("update() debe actualizar un usuario existente", async () => {
    const user = {
      update: jest.fn(),
      get: jest.fn().mockReturnValue({ id: 1, email: "test@test.com", password: "1234" }),
    };
    mockUser.findByPk.mockResolvedValue(user);

    const result = await service.update(1, { email: "nuevo@test.com" });

    expect(mockUser.findByPk).toHaveBeenCalledWith(1);
    expect(user.update).toHaveBeenCalledWith({ email: "nuevo@test.com" });
    expect(result.password).toBeUndefined();
  });

  test("update() debe lanzar error si el usuario no existe", async () => {
    mockUser.findByPk.mockResolvedValue(null);

    await expect(service.update(99, {})).rejects.toThrow("Usuario no encontrado");
  });
});

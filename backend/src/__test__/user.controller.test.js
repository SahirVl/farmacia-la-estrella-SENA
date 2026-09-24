const { createUser, userList, updateUser } = require("../controllers/user.controller");
const UserService = require("../services/user.service");

// Mockear el servicio
jest.mock("../services/user.service");

describe("UserController", () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: { email: "test@test.com", password: "1234" }, query: { id: 1 } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    next = jest.fn();

    // Configurar mocks para cada método
    UserService.prototype.create = jest.fn().mockResolvedValue(req.body);
    UserService.prototype.find = jest.fn().mockResolvedValue([{ id: 1, email: "test@test.com" }]);
    UserService.prototype.update = jest.fn().mockResolvedValue({ id: 1, email: "nuevo@test.com" });
  });

  test("createUser debe devolver 201 y el usuario creado", async () => {
    await createUser(req, res, next);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });

  test("userList debe devolver 200 y lista de usuarios", async () => {
    await userList(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ id: 1, email: "test@test.com" }]);
  });

  test("updateUser debe devolver 200 y usuario actualizado", async () => {
    await updateUser(req, res, next);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: 1, email: "nuevo@test.com" });
  });
});

// backend/src/__tests__/user.controller.test.js
const { createUser, userList, updateUser } = require("../controllers/user.controller");
const UserService = require("../services/user.service");

jest.mock("../services/user.service"); // mock del servicio

describe("UserController", () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: { email: "test@test.com", password: "1234" }, query: { id: 1 } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  test("createUser debe devolver 201 y el usuario creado", async () => {
    UserService.prototype.create = jest.fn().mockResolvedValue(req.body);

    await createUser(req, res, next);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });

  test("userList debe devolver 200 y lista de usuarios", async () => {
    const users = [{ id: 1, email: "test@test.com" }];
    UserService.prototype.find = jest.fn().mockResolvedValue(users);

    await userList(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(users);
  });

  test("updateUser debe devolver 200 y usuario actualizado", async () => {
    const updatedUser = { id: 1, email: "nuevo@test.com" };
    UserService.prototype.update = jest.fn().mockResolvedValue(updatedUser);

    await updateUser(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(updatedUser);
  });
});

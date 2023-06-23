/* eslint-disable no-undef */
const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../app");

const User = require("../models/user");

const { DB_HOST_TEST, PORT = 3000 } = process.env;

describe('test login controller', () => {
  let server = null;
  beforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);
    server = app.listen(PORT);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  beforeEach(()=> {

  })

  afterEach(async()=> {
      await User.deleteMany({});
  })

  test("test correct signin-login controller", async () => {
    const loginData = {
      email: "users30@gmail.com",
      password: "1234568",
    };
    const { body, statusCode } = await request(app)
      .post("/api/users/login")
      .send(loginData);

    expect(statusCode).toBe(200);
    expect(Array.isArray(body)).toBe(true);
    expect(body.email).toBe(loginData.email);

    const user = await User.findOne({ email: loginData.email });
    expect(user.email).toBe(loginData.email);
    expect(typeof user.email).toBe("string");
  });
});

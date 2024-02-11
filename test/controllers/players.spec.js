import request from "supertest";
import app from "../../server.js";
import { faker } from "@faker-js/faker";
import { generateToken } from "../utils/login.js";

describe("equipments controller", () => {
  describe("GET /api/v1/equipments with valid params", () => {
    it("should return all equipments and status code 200", async () => {
      const response = await request(app).get("/api/v1/equipments");
      expect(response.statusCode).toBe(200);
    });
    it("should return a instance of arrays", async () => {
      const response = await request(app).get("/api/v1/equipments");
      const { equipmentsObtained } = response.body;
      expect(equipmentsObtained).toBeInstanceOf(Array);
    });
  });
});

describe("login controller", () => {
  describe("POST /api/v1/auth valid params", () => {
    const payload = {
      username: "admin",
      password: "1234",
    };
    it("should return a object", async () => {
      const response = await request(app).post("/api/v1/auth").send(payload);
      expect(response.body).toBeInstanceOf(Object);
    });
  });

  describe("POST /api/v1/auth invalid params", () => {
    const payload = {
      username: faker.internet.userName(),
      password: faker.internet.password(),
    };
    console.log(payload);
    it("should return a status code 400", async () => {
      const response = await request(app).post("/api/v1/auth").send(payload);
      expect(response.statusCode).toBe(400);
    });
  });
});

describe("playersPositions controller", () => {
  describe("POST /api/v1/equipments/:teamID/players with token valid", () => {
    const token = generateToken();
    const payload = {
      players: {
        name: faker.person.firstName("male"),
        positions_id: faker.number.int({ min: 1, max: 4 }),
      },
    };
    console.log(payload);
    it("should return a status code 201", async () => {
      const response = await request(app)
        .post("/api/v1/equipments/1/players")
        .set("Authorization", `Bearer ${token}`)
        .send(payload);
      expect(response.statusCode).toBe(201);
    });
  });
});

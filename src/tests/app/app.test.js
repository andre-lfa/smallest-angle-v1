const request = require("supertest");
const app = require("../../app");

describe("Test the root path", () => {
    test("It should response the GET method", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    });
});

describe("Test if a path exists", () => {
  test("It should response the status code 404", async () => {
    const response = await request(app).get("/test");
    expect(response.statusCode).toBe(404);
  });
});
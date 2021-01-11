const request = require("supertest");
const app = require("../../app");

describe("Test the params of the route", () => {
    test("It should respond the GET method with the correct angle", async () => {
      const response = await request(app).get(`/v1/rest/clock/6/0`);
      expect(response.statusCode).toBe(200);
      expect(response.body.angle).toBe(180);
    });
});

describe("Test the params of the route", () => {
    test("It should respond the GET method even though not having minutes", async () => {
      const response = await request(app).get(`/v1/rest/clock/3`);
      expect(response.statusCode).toBe(200);
      expect(response.body.angle).toBe(90);
    });
});

describe("Test the params of the route", () => {
    test("It should respond the GET method with the smallest angle", async () => {
      const response = await request(app).get(`/v1/rest/clock/9`);
      expect(response.statusCode).toBe(200);
      expect(response.body.angle).toBe(90);
    });
});

describe("Test the params of the route", () => {
    test("It should respond the GET method with the smallest angle", async () => {
      const response = await request(app).get(`/v1/rest/clock/4`);
      expect(response.statusCode).toBe(200);
      expect(response.body.angle).toBe(120);
    });
});

describe("Test the params of the route", () => {
    test("It should respond the GET method with the smallest angle", async () => {
      const response = await request(app).get(`/v1/rest/clock/10/34`);
      expect(response.statusCode).toBe(200);
      expect(response.body.angle).toBe(113);
    });
});

describe("Test receiving negative numbers", () => {
    test("It should response with the smallest angle even though having negative parameters", async () => {
      const response = await request(app).get(`/v1/rest/clock/-10`);
      expect(response.statusCode).toBe(200);
      expect(response.body.angle).toBe(60);
    });
});

describe("Test receiving bigger hours", () => {
    test("It should response that the API only accept numbers between 1 and 24 for hours", async () => {
        const response = await request(app).get(`/v1/rest/clock/25`);
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("The API only accept value between 1-24 for hours and 0-60 for minutes!");
    });
});

describe("Test receiving bigger minutes", () => {
    test("It should response that the API only accept numbers between 0 and 60 for minutes", async () => {
        const response = await request(app).get(`/v1/rest/clock/10/64`);
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("The API only accept value between 1-24 for hours and 0-60 for minutes!");
    });
});

describe("Test with float values for angles", () => {
  test("It should response with the rounded smallest angle", async () => {
      const response = await request(app).get(`/v1/rest/clock/9/31`);
      expect(response.statusCode).toBe(200);
      expect(response.body.angle).toBe(100);
  });
});
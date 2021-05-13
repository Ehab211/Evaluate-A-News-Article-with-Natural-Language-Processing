import "babel-polyfill";
var app = require("../index");
describe("Server Test", () => {
  const request = require("supertest");
  const app = require("../index");

  describe("Test Home Page Path", () => {
    it("Response the GET method", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    });
  });

  describe('Test Post Api Fetched From MeaningCloud "/add_url"', () => {
    it("Response the post method", async () => {
      const response = await request(app).post("/add_url");
      expect(response.statusCode).toBe(200);
    });
  });
});

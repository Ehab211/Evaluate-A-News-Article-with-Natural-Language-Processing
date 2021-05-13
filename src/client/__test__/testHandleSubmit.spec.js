// to solve ReferenceError: regeneratorRuntime is not defined
import "babel-polyfill";
// Import the js file to test
import { handleSubmit } from "../js/formHandler";
describe("handleSubmit Test", () => {
  it("Testing the handleSubmit() function", () => {
    expect(handleSubmit).toBeDefined();
  });
});
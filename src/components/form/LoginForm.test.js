import { validate } from "./LoginForm";

describe("Login validator", () => {
  it("return errors when values is undefined", () => {
    const values = {};
    const actual = validate(values);
    const expected = {
      password: "password is required",
      email: "email is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return errors when values are defined and empty", () => {
    const values = {
      password: "",
      email: ""
    };
    const actual = validate(values);
    const expected = {
      password: "password is required",
      email: "email is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return an error when email is invalid", () => {
    const values = {
      password: "42",
      email: "33"
    };
    const actual = validate(values);
    const expected = { email: "email is not a valid email" };
    expect(actual).toEqual(expected);
  });
  it("return no error when values are valid", () => {
    const values = {
      password: "42",
      email: "register@example.org"
    };
    const actual = validate(values);
    const expected = {};
    expect(actual).toEqual(expected);
  });
});

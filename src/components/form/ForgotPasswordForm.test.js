import { validate } from "./ForgotPasswordForm";

describe("ForgotPassword validator", () => {
  it("return errors when values is undefined", () => {
    const values = {};
    const actual = validate(values);
    const expected = {
      email: "email is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return errors when values are defined and empty", () => {
    const values = {
      email: ""
    };
    const actual = validate(values);
    const expected = {
      email: "email is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return an error when email is invalid", () => {
    const values = {
      email: "33"
    };
    const actual = validate(values);
    const expected = { email: "email is not a valid email" };
    expect(actual).toEqual(expected);
  });
  it("return no error when values are valid", () => {
    const values = {
      email: "foobar@example.org"
    };
    const actual = validate(values);
    const expected = {};
    expect(actual).toEqual(expected);
  });
});

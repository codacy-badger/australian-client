import { validate } from "./RegisterForm";

describe("Register validator", () => {
  it("return errors when values is undefined", () => {
    const values = {};
    const actual = validate(values);
    const expected = {
      email: "email is required",
      password: "password is required",
      confirmation: "confirmation is required",
      read: "read is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return errors when values are defined and empty", () => {
    const values = {
      email: "",
      password: "",
      confirmation: "",
      read: false
    };
    const actual = validate(values);
    const expected = {
      email: "email is required",
      password: "password is required",
      confirmation: "confirmation is required",
      read: "read is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return an error when email is invalid", () => {
    const values = {
      email: "33",
      password: "42",
      confirmation: "42",
      read: true
    };
    const actual = validate(values);
    const expected = {
      email: "email is not a valid email"
    };
    expect(actual).toEqual(expected);
  });
  it("return an error when confirmation is different from password", () => {
    const values = {
      email: "foobar@example.org",
      password: "42",
      confirmation: "33",
      read: true
    };
    const actual = validate(values);
    const expected = {
      confirmation: "confirmation is different from password"
    };
    expect(actual).toEqual(expected);
  });
  it("return no error when values are valid", () => {
    const values = {
      email: "foobar@example.org",
      password: "42",
      confirmation: "42",
      read: true
    };
    const actual = validate(values);
    const expected = {};
    expect(actual).toEqual(expected);
  });
});

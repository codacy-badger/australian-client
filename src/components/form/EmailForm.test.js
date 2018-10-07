import { validate } from "./EmailForm";

describe("ForgotPassword validator", () => {
  it("return errors when values is undefined", () => {
    const values = {};
    const actual = validate(values);
    const expected = {
      "new-email": "new-email is required",
      "old-email": "old-email is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return errors when values are defined and empty", () => {
    const values = {
      "new-email": "",
      "old-email": ""
    };
    const actual = validate(values);
    const expected = {
      "new-email": "new-email is required",
      "old-email": "old-email is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return an error when email is invalid", () => {
    const values = {
      "new-email": "33",
      "old-email": "42"
    };
    const actual = validate(values);
    const expected = {
      "old-email": "old-email is not a valid email",
      "new-email": "new-email is not a valid email"
    };
    expect(actual).toEqual(expected);
  });
  it("return no error when values are valid", () => {
    const values = {
      "old-email": "foobar@example.org",
      "new-email": "foobar@example.org"
    };
    const actual = validate(values);
    const expected = {};
    expect(actual).toEqual(expected);
  });
});

import { validate } from "./DeleteAccountForm";

describe("Delete account validator", () => {
  it("return errors when values is undefined", () => {
    const values = {};
    const actual = validate(values);
    const expected = {
      password: "password is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return errors when values are defined and empty", () => {
    const values = {
      password: ""
    };
    const actual = validate(values);
    const expected = {
      password: "password is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return no error when values are valid", () => {
    const values = {
      password: "42"
    };
    const actual = validate(values);
    const expected = {};
    expect(actual).toEqual(expected);
  });
});

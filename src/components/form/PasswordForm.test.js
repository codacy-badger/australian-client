import { validate } from "./PasswordForm";

describe("Register validator", () => {
  it("return errors when values is undefined", () => {
    const values = {};
    const actual = validate(values);
    const expected = {
      confirmation: "confirmation is required",
      "new-password": "new-password is required",
      "old-password": "old-password is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return errors when values are defined and empty", () => {
    const values = {
      confirmation: "",
      "new-password": "",
      "old-password": ""
    };
    const actual = validate(values);
    const expected = {
      confirmation: "confirmation is required",
      "new-password": "new-password is required",
      "old-password": "old-password is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return errors when values are defined not empty but different", () => {
    const values = {
      confirmation: "22",
      "new-password": "42",
      "old-password": "33"
    };
    const actual = validate(values);
    const expected = {
      confirmation: "confirmation is different from password"
    };
    expect(actual).toEqual(expected);
  });
  it("return no error when values are valid", () => {
    const values = {
      confirmation: "42",
      "new-password": "42",
      "old-password": "33"
    };
    const actual = validate(values);
    const expected = {};
    expect(actual).toEqual(expected);
  });
});

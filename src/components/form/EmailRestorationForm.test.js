import { validate } from "./EmailRestorationForm";

describe("Email restoration validator", () => {
  it("return errors when values is undefined", () => {
    const values = {};
    const actual = validate(values);
    const expected = {
      restoration: "email-restoration is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return errors when values are defined and empty", () => {
    const values = {
      restoration: ""
    };
    const actual = validate(values);
    const expected = {
      restoration: "email-restoration is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return no error when values are valid", () => {
    const values = {
      restoration: "42"
    };
    const actual = validate(values);
    const expected = {};
    expect(actual).toEqual(expected);
  });
});

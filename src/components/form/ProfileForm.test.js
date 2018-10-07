import { validate } from "./ProfileForm";

describe("Profile validator", () => {
  it("return errors when values is undefined", () => {
    const values = {};
    const actual = validate(values);
    const expected = {
      name: "name is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return errors when values are defined and empty", () => {
    const values = {
      name: "",
      givenName: "",
      familyName: "",
      jobTitle: ""
    };
    const actual = validate(values);
    const expected = {
      name: "name is required"
    };
    expect(actual).toEqual(expected);
  });
  it("return no error when values are valid", () => {
    const values = {
      name: "foo"
    };
    const actual = validate(values);
    const expected = {};
    expect(actual).toEqual(expected);
  });
});

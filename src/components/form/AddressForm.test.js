import { validate } from "./AddressForm";

describe("Address form validator", () => {
  it("return no error when values are undefined", () => {
    const values = {};
    const actual = validate(values);
    const expected = {};
    expect(actual).toEqual(expected);
  });
  it("return no error when values are defined and empty", () => {
    const values = {
      latitude: 0,
      longitude: 0,
      setPosition: false,
      city: "",
      country: ""
    };
    const actual = validate(values);
    const expected = {};
    expect(actual).toEqual(expected);
  });
  it("return errors when values are not between -90 and 90", () => {
    const values = {
      latitude: 91,
      longitude: -91,
      setPosition: true,
      city: "",
      country: ""
    };
    const actual = validate(values);
    const expected = {
      latitude: "latitude must be a Float between -90 and +90"
    };
    expect(actual).toEqual(expected);
  });
  it("return errors when values are not between -180 and 180", () => {
    const values = {
      latitude: 181,
      longitude: -181,
      setPosition: true,
      city: "",
      country: ""
    };
    const actual = validate(values);
    const expected = {
      latitude: "latitude must be a Float between -90 and +90",
      longitude: "longitude must be a Float between -180 and +180"
    };
    expect(actual).toEqual(expected);
  });
  it("return no error when values are valid", () => {
    const values = {
      latitude: 42,
      longitude: 42,
      setPosition: true,
      city: "Lacanau",
      country: "France"
    };
    const actual = validate(values);
    const expected = {};
    expect(actual).toEqual(expected);
  });
});

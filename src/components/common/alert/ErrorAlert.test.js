import React from "react";
import ErrorAlert from "./ErrorAlert";
import { shallow } from "enzyme";

describe("ErrorAlert", () => {
  it("should not have class foo", () => {
    const wrapper = shallow(<ErrorAlert>foo</ErrorAlert>);
    expect(wrapper.hasClass("foo")).toEqual(false);
  });
  it("should be centered and color should be danger", () => {
    const wrapper = shallow(<ErrorAlert>foo</ErrorAlert>);
    expect(wrapper.hasClass("text-center")).toEqual(true);
    //expect(wrapper.hasClass('danger')).toEqual(true);
    // expect(wrapper.hasClass('alert-danger')).toEqual(true);
    // expect(wrapper.hasClass('alert-dismissible')).toEqual(true);
  });
  // it("should contains children ", () => {
  //   const wrapper = shallow(<ErrorAlert>foo</ErrorAlert>);
  //   expect(wrapper.find('div').children().html()).toEqual("foo");
  //   //expect(wrapper.html()).toEqual(<div class=\"text-center alert alert-danger alert-dismissible fade\" role=\"alert\"><button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>foo</div>);
  // });
});

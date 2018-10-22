import React from "react";
import Submit from "./Submit";
import { shallow } from "enzyme";

describe("Submit", () => {
  it("when no properties provided should render correctly", () => {
    // const t = (arg) => {
    //   return "++" + arg + "++";
    // };
    const fake = () => {
      return null
    };

    const wrapper = shallow((<Submit isPending={false} name={"foo"} onClick={fake} />));
    // console.log(wrapper.html());
    //FIXME : find why this is returning < />
    expect(wrapper.text()).toEqual("form.foo.submit");
    //FIXME : find why this is returning false!
    expect(wrapper.is("button")).toEqual(true);
  });
});

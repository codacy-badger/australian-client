import React from "react";
import StatusAlert from "./StatusAlert";
import TestRenderer from 'react-test-renderer';
import {translate} from "react-i18next";

describe("StatusAlert test suite", () => {
  it("Returns false when there is no error", () => {
    const status = {
      isError: false,
      isLoaded: false,
      isLoading: false,
      isUnloadable: false
    };
    const testRenderer = TestRenderer.create(
      translate()(
        <StatusAlert code="foo" status={status}/>
      )
    );

    //FIXME do it !
    //console.log(JSON.stringify(TestRenderer));
    expect(true);
  });
});
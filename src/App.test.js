import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { translate } from "react-i18next";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const MyApp = translate("translations")(App);
  ReactDOM.render(MyApp, div);
  ReactDOM.unmountComponentAtNode(div);
});

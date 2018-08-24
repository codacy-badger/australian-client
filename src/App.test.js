import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { translate } from "react-i18next";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(translate("translations")(App), div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from "react";
import ReactDOM from "react-dom";
import { Flipper } from "./Flipper";

describe("<Flipper />", () => {
  test("renders without exploding", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Flipper />, div);
  });
});

import React from "react";
import ReactDOM from "react-dom";
import { Coin } from "./Coin";

describe("<Coin />", () => {
  test("renders without exploding", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Coin />, div);
  });
});

import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import BrowserRouter from "react-router-dom/BrowserRouter";
import App from "./App";
import configureStore from "./common/store/configureStore";

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./App", () => {
    hydrate(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
  });
}

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { DiffManager } from "./api/diff-manager";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DiffManager />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

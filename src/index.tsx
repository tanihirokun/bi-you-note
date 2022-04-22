import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./router/ScrollToTop";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop />
        <Router />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

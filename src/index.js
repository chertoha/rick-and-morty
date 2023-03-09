import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "utils/theme";
import { Provider as StoreProvider } from "react-redux";
import { store } from "redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <App />
        </StoreProvider>
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();

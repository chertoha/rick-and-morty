import "./styles/normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { Provider as StoreProvider } from "react-redux";
import { persistor, store } from "redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/integration/react";
import { routes } from "routes";
import { GlobalStyle } from "./styles/global.styled";

const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GlobalStyle />
            <RouterProvider router={router} />
          </PersistGate>
        </StoreProvider>
      </ThemeProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

reportWebVitals();

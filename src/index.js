import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "components/App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "utils/theme";
import { Provider as StoreProvider } from "react-redux";
import { persistor, store } from "redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "components/Layout";
import Home from "components/Home";
import CharacterPage from "pages/CharacterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/character/:id",
        element: <CharacterPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    {/* <BrowserRouter> */}
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {/* <App /> */}
            <RouterProvider router={router} />
          </PersistGate>
        </StoreProvider>
      </ThemeProvider>
    </React.StrictMode>
    {/* </BrowserRouter> */}
  </GoogleOAuthProvider>
);

reportWebVitals();

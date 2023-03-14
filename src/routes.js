import Home from "components/Home";
import Layout from "components/Layout";
import CharacterPage from "pages/CharacterPage";
import { Navigate } from "react-router";

export const ROUTES = {
  MAIN: "/",
  CHARACTER: "/character",
};

export const routes = [
  {
    path: ROUTES.MAIN,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: `${ROUTES.CHARACTER}/:id`,
        element: <CharacterPage />,
      },
      {
        path: "*",
        element: <Navigate to={ROUTES.MAIN} replace />,
      },
    ],
  },
];

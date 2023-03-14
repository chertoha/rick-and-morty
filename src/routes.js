import ErrorComponent from "components/ErrorComponent";
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
        element: (
          <ErrorComponent
            title="Error 404"
            timeout={3000}
            redirectTo={ROUTES.MAIN}
          />
        ),
      },
    ],
  },
];

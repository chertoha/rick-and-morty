import Home from "components/Home";
import Layout from "components/Layout";
import CharacterPage from "pages/CharacterPage";
import { Navigate } from "react-router";

export const routes = [
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
];

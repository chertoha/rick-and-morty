import ErrorComponent from "components/ErrorComponent";
import Home from "components/Home";
import Layout from "components/Layout";
import PrivateRoute from "components/PrivateRoute";
import CharacterPage from "pages/CharacterPage";
import LocationPage from "pages/LocationPage";

export const ROUTES = {
  MAIN: "/",
  CHARACTER: "/character",
  LOCATION: "/location",
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
        path: `${ROUTES.LOCATION}`,
        // element: <LocationPage />,
        element: (
          <PrivateRoute redirectTo={ROUTES.MAIN} component={LocationPage} />
        ),
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

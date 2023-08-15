import { ReactElement } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "@app/pages/App";
import TicTac from "@app/pages/Tictac";
import RouterErrorPage from "@app/router/RouterErrorPage";
import Chess from "@app/pages/Chess";

export enum Routes {
  main = "/",
  tictac = "/tictac",
  chess = "/chess",
}

interface PrivateRoute {
  children: ReactElement;
}

const PrivateRoute = ({ children }: PrivateRoute) => {
  const isNameGiven = true;
  return isNameGiven ? children : <Navigate to="/" />;
};

export const router = createBrowserRouter([
  {
    path: Routes.main,
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    errorElement: <RouterErrorPage />,
  },
  {
    path: Routes.tictac,
    element: <TicTac />,
  },
  {
    path: Routes.chess,
    element: <Chess />,
  },
]);

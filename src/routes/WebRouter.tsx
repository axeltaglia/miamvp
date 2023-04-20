import { FC, ReactElement } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { routes as appRoutes } from "./routes";

const Path: FC<any> = (): ReactElement => {
  const { authToken } = useAuth();

  const defaultPrivateRouteProps = {
    isAuthenticated: authToken !== "",
    authenticationPath: "/",
  };

  return (
    <Router>
      <Routes>
        {appRoutes.map((route) => {
          if (route.authenticated) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <PrivateRoute
                    {...defaultPrivateRouteProps}
                    outlet={<route.component />}
                  />
                }
              />
            );
          } else {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <PublicRoute
                    {...defaultPrivateRouteProps}
                    outlet={<route.component />}
                  />
                }
              />
            );
          }
        })}
      </Routes>
    </Router>
  );
};

export default Path;

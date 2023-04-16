import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import {FC, ReactElement} from "react";
import { routes as appRoutes } from "./routes";
import {useAuth} from "../contexts/AuthContext/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Path: FC<any> = (): ReactElement => {
    const {authToken} = useAuth()

    const defaultPrivateRouteProps = {
        isAuthenticated: authToken !== '',
        authenticationPath: '/',
    };

    return (
        <Router>
            <Routes>
                {appRoutes.map((route) => {
                    if (route.authenticated) {
                        return <Route path={route.path}
                                      element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<route.component/>}/>}/>
                    } else {
                        return <Route path={route.path}
                                      element={<PublicRoute {...defaultPrivateRouteProps} outlet={<route.component/>}/>}/>
                    }
                })}
            </Routes>
        </Router>
    )
}

export default Path

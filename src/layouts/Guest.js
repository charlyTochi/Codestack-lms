
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import { sessionChecker } from "services/utils";
import { authRoutes as routes } from "routes.js";
import { dash_home_url } from "constants/endpoints";
import Header from "components/Navbars/DemoNavbar";
import logoImg from "../assets/img/logo.png";
import UserSession from "constants/UserSession";

class GuestLayout extends React.Component {
    componentWillMount() {
        // check if the user has an active session
        sessionChecker(isValid => {
            if (isValid) {
                window.location = dash_home_url;
            }
        });
    }
    render() {
        return (
            <div >
                <Switch>
                    {routes.map((prop, key) => {
                        if (prop.layout != "/admin") {
                            return (
                                <Route
                                    path={prop.layout + prop.path}
                                    component={prop.component}
                                    key={key}
                                />
                            );
                        } else {
                            return null;
                        }
                    })}
                    {/* <Redirect from="/" to="/auth/home" /> */}
                    <Redirect from="/auth" to="/auth/login" />
                </Switch>
            </div>
            // </div>
        );
    }
}

export default GuestLayout;
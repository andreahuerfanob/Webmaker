import React from "react";
import { Route, useHistory } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      await axios.get("/api/user/load");
    } catch (error) {
      history.push("/");
    }
  };

  loadUser();

  return (
    <Route
      {...rest}
      render={props => {
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;

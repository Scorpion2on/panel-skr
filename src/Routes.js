import React from "react";
import { Switch } from "react-router-dom";
import { Home, LoginPage } from "pages";
import { GuestRoute } from "components/routes";

const Routes = () => {
  return (
    <Switch>
      <GuestRoute exact 
      component={Home} 
      path="/" />
      <GuestRoute
        component={LoginPage}
        path="/login"
      />
    </Switch>
  );
};

export default Routes;
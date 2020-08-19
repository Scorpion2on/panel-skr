import React from "react";
import { Switch } from "react-router-dom";
import { Home, Login } from "pages";
import { TestLayout } from "layouts";
import { GuestRoute } from "components/routes";

const Routes = () => {
  return (
    <Switch>
      <GuestRoute exact 
      component={Home} 
      layout={TestLayout} 
      path="/" />
      <GuestRoute
        component={Login}
        layout={TestLayout}
        path="/login"
      />
    </Switch>
  );
};

export default Routes;
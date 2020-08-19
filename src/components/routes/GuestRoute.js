import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
// import { UserContext } from "UserContext";

const GuestRoute = (props) => {
  // const { user } = useContext(UserContext);
  const { layout: Layout, component: Component, ...rest } = props;
  const test = true;

  return (
    <Route
      {...rest}
      render={(matchProps) =>
        test === true ? (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

GuestRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default GuestRoute;
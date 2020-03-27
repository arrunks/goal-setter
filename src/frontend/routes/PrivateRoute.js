import React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";
import { connect } from 'react-redux';

const PrivateRoute = ({user, children, ...rest }) => {

    return (
        <Route
        {...rest}
        render={({ location }) =>
        user.loaded ? (
            children
        ) : (
            <Redirect
            to={{
                pathname: "/signin",
                state: { from: location }
            }}
            />
        )
        }
    />
    );
  }

  const mapStateToProps = (props) => {
    const { user } = props;
    return { user };
  }

  export default connect(mapStateToProps)(PrivateRoute);
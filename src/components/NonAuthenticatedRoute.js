import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import HomePage from "./page/HomePage";

export const NonAuthenticatedRoute = ({ component: ComposedComponent, ...rest }) => {
  class NonAuthentication extends Component {
    /* Display to HomePage if authenticated; otherwise, return the component imputted into <AuthenticatedRoute /> */
    handleRender = (props) => {
      if (this.props.isAuthenticated) {
        return <HomePage />;
      } else {
        return <ComposedComponent {...props} />;
      }
    };

    render() {
      return <Route {...rest} render={this.handleRender} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.authReducer.isAuthenticated
    };
  };

  const NonAuthenticationContainer = connect(mapStateToProps)(NonAuthentication);
  return <NonAuthenticationContainer />;
};

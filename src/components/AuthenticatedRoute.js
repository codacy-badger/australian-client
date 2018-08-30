import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";

export const AuthenticatedRoute = ({ component: ComposedComponent, ...rest }) => {
  class Authentication extends Component {
    /* LoginPage displayed if not authenticated; otherwise, return the component imputted into <AuthenticatedRoute /> */
    handleRender = (props) => {
      if (!this.props.isAuthenticated) {
        return <LoginPage onRef={(ref) => (this.loginModal = ref)} />;
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

  const AuthenticationContainer = connect(mapStateToProps)(Authentication);
  return <AuthenticationContainer />;
};

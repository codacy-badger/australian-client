import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom'

export const AuthenticatedRoute = ({component: ComposedComponent, ...rest}) => {

  class Authentication extends Component {

    /* Redirect if not authenticated; otherwise, return the component imputted into <AuthenticatedRoute /> */
    handleRender = props => {
      if (!this.props.isAuthenticated) {
        return <Redirect to="/" />
      } else {
        return <ComposedComponent {...props}/>
      }
    };

    render() {
      return (
        <Route {...rest} render={this.handleRender}/>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.authReducer.isAuthenticated,
    };
  };

  const AuthenticationContainer = connect(mapStateToProps)(Authentication);
  return <AuthenticationContainer/>
};
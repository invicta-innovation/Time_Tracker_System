import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './layout/login';
import { checkAuthState ,takeAuth} from './_actions/auth-action';
import { ProtectedRoute } from './commons/shared/auth/ProtectedRoute';
import { LoggedInRoute } from './commons/shared/auth/LoggedInRoute';
import DefaultLayout from './layout/default-layout';
import authService from "./_utils/auth-service";
import Home from './layout/home';
let decodeToken;
class App extends Component {
  componentWillMount() {
    this.props.checkAuthState();
  }
 
  render() {
    return (
           <Switch>
            <Route path="/home" component={Home} />
            <Route path="/" component={DefaultLayout} />
            {/* <Route path="/login" component={Login} /> */}
          </Switch>
    );
  }

}

const mapStateToProps = state => ({
  auth: state.authStore.authData
});

const mapDispachToProps = dispatch => ({
  checkAuthState: () => dispatch(checkAuthState())
});

export default connect(mapStateToProps, mapDispachToProps)(App);

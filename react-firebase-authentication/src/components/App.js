import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navigation from './Navigation';
import RegisterPage from './register';
import LoginPage from './login';
import LandingPage from './landing';
import HomePage from './home';
import ForgotPasswordPage from './forgotten-password';
import AccountPage from './account';

import * as routes from '../constants/routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path={routes.REGISTER} component={() => <RegisterPage/>} />
          <Route exact path={routes.LOGIN} component={() => <LoginPage/>} />
          <Route exact path={routes.LANDING} component={() => <LandingPage/>} />
          <Route exact path={routes.HOME} component={() => <HomePage/>} />
          <Route exact path={routes.FORGOT_PASSWORD} component={() => <ForgotPasswordPage/>} />
          <Route exact path={routes.ACCOUNT} component={() => <AccountPage/>} />
        </div>
      </Router>
    );
  }
}

export default App;
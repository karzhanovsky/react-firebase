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
import { firebase } from '../firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
      ? this.setState(() => ({ authUser }))
      : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
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

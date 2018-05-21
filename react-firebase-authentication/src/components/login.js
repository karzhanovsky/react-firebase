import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';

import * as routes from '../constants/routes';
import { auth } from '../firebase';

const LoginPage = ({ history }) =>
  <div>
    <h1>Login page</h1>
    <LoginForm history={history} />
  </div>

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
  }

  onSubmit = (event) => {

    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
          this.setState(() => ({...INITIAL_STATE}));
          history.push(routes.HOME)
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type='submit'>
          Log in
        </button>

        {error && <p>{error.message}</p> }
      </form>
      <RegisterLink />
      </div>
    );
  }
};

  const RegisterLink = () =>
    <p>
      Dont have an account?
      {' '}
      <Link to={routes.REGISTER}>Register</Link>
    </p>

export default withRouter(LoginPage);

export {
  LoginForm,
};

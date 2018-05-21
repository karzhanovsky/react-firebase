import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';
import LogOut from './logout';

const Navigation = ({authUser}) =>
  <div>
    { authUser ? <LoggedinUser /> : <NotLoggedinUser /> }
  </div>

const LoggedinUser = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><LogOut /></li>
  </ul>

const NotLoggedinUser = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.LOGIN}>Log In</Link></li>
  </ul>

export default Navigation;

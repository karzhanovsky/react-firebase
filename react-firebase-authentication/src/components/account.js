import React from 'react';

import AuthUserContext from './AuthUserContext';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      authUser && <p>Account: {authUser.email}</p>
    }
  </AuthUserContext.Consumer>

export default AccountPage;

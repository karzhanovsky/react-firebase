import React from 'react';

import { auth } from '../firebase';

const LogOut = () =>
  <button
  type="submit"
  onClick={auth.doSignOut}
  >
  Log out
  </button>

export default LogOut;

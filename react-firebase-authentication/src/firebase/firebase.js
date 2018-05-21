import * as firebase from 'firebase';

const config = {
    apiKey: "*",
    authDomain: "react-implementation.firebaseapp.com",
    databaseURL: "https://react-implementation.firebaseio.com",
    projectId: "react-implementation",
    storageBucket: "react-implementation.appspot.com",
    messagingSenderId: "352234039358"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};

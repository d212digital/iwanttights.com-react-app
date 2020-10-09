import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBXCtljUtBAgPB6zFlU5shFX3SswKs4Ngo",
    authDomain: "iwt-db.firebaseapp.com",
    databaseURL: "https://iwt-db.firebaseio.com",
    projectId: "iwt-db",
    storageBucket: "iwt-db.appspot.com",
    messagingSenderId: "77254737550",
    appId: "1:77254737550:web:2261057067699f6e7d13df",
    measurementId: "G-QEGCNQ0EW6"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore ();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;





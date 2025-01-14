import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA85fOAblB6IdPaWOx8oY7gXFeLmEb3dh0",
  authDomain: "neighborly-c40ec.firebaseapp.com",
  projectId: "neighborly-c40ec",
  storageBucket: "neighborly-c40ec.firebasestorage.app",
  messagingSenderId: "506171224898",
  appId: "1:506171224898:web:793eabc722652d76420edb",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();
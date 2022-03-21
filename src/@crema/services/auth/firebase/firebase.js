import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  sendEmailVerification,
  updateProfile,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from 'firebase/auth';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// Initialize Firebase

const firebaseConfig = {
  apiKey: 'AIzaSyBprnFYTmX6rNoAwZmko0bjHaJEKNeOVnw',
  authDomain: 'circlestokenico.firebaseapp.com',
  projectId: 'circlestokenico',
  storageBucket: 'circlestokenico.appspot.com',
  messagingSenderId: '266527740607',
  appId: '1:266527740607:web:258fad98f84d798bdf6c0a',
  measurementId: 'G-T1JLGL9LGC',
};

const app = initializeApp(firebaseConfig);
console.log('🚀 ~ file: firebase.js ~ line 28 ~ app', app);

const auth = getAuth(app);
console.log('🚀 ~ file: firebase.js ~ line 31 ~ auth', auth);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const twitterAuthProvider = new TwitterAuthProvider();

export {
  db,
  auth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  sendEmailVerification,
  updateProfile,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
};

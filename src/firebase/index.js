import { compose } from 'redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase'

// Firebase config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

export default firebaseConfig;
//
// firebase.initializeApp(firebaseConfig);
//
// // react-redux-firebase options
// const config = {
//   userProfile: 'users', // firebase root where user profiles are stored
//   enableLogging: false, // enable/disable Firebase's database logging
// };
//
// // Add redux Firebase to compose
// const createStoreWithFirebase = compose(
//   reactReduxFirebase(firebase, config)
// )(createStore);
//
// // Create store with reducers and initial state
// const store = createStoreWithFirebase(rootReducer);
// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "./reducers";
// import { forbiddenWordsMiddleware } from "./middlewares"
//
// const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// const store = createStore(
//     rootReducer,
//     storeEnhancer(applyMiddleware(forbiddenWordsMiddleware))
// );
//
// export default store;

import { createStore, compose } from "redux";
import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'

// Adding firebase components
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import firebaseConfig from '../firebase'
import { initialState, rootReducer } from './reducers'

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

// config the firebase enhancer for the redux store
const enhancers = [
  reduxFirestore(firebase),
  reactReduxFirebase(firebase, {
    userProfile: 'users',
    useFirestoreForProfile: true,
  })
];

//OPTIONAL configuration of dev-tools
// const reduxDevToolsExtension = window.devToolsExtension;
const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
if (
  process.env.NODE_ENV === "development" &&
  typeof reduxDevToolsExtension === "function"
) {
  enhancers.push(reduxDevToolsExtension())
}

const composedEnhancers = compose(
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);


export default store

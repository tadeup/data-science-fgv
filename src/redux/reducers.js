import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import {initialState as newPostInitial, reducer as newPostReducer} from "../views/NewPostPage/redux/reducers";

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  newPost: newPostReducer,
});

export const initialState = {
  newPost: newPostInitial
};
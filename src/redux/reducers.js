import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

import dashboardReducer from '../views/DashboardPage/redux/reducers';
import formReducer from '../views/FormPage/redux/reducers';

export const rootReducer = combineReducers({
    dashboardReducer,
    formReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export const initialState = {};
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import dashboardReducer from '../views/DashboardPage/redux/reducers';
import formReducer from '../views/FormPage/redux/reducers';
import {initialState as categoriesInitial, reducer as categoriesReducer} from "../components/examples/CategoryList/redux/reducer";

export const rootReducer = combineReducers({
    dashboardReducer,
    formReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    categories: categoriesReducer,
});

export const initialState = {
    categories: categoriesInitial
};
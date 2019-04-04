import { combineReducers } from 'redux';
import dashboardReducer from '../views/DashboardPage/redux/reducers';
import formReducer from '../views/FormPage/redux/reducers';

export default combineReducers({
    dashboardReducer,
    formReducer
});

import React from 'react';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import { store } from "./redux/configureStore";
import { rrfProps } from "./firebase";
import AuthButton from "./components/examples/AuthButton";
import AddCategory from "./components/examples/AddCategory";
import CategoryList from "./components/examples/CategoryList";
import ExpenseList from "./components/examples/ExpenseList";

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthButton />
      <AddCategory />
      <CategoryList />
      <ExpenseList/>
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default App;

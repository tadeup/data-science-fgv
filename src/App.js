import React from 'react';
import PropTypes from 'prop-types'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux'

import indexRoutes from "./router/index.jsx";
import AuthButton from "./components/AuthButton";

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {
          indexRoutes.map((prop, key) => {return <Route path={prop.path} key={key} component={prop.component}/>;})
        }
      </Switch>
    </BrowserRouter>
    <AuthButton/>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;

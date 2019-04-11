import React from 'react';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import { store } from "./redux/configureStore";
import { rrfProps } from "./firebase";
import indexRoutes from "./router";
import NavBar from "./components/Navbar/Navbar";

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <>
          <NavBar />
          <main style={{marginTop: 12 + 'vh',}}>
            <Switch>
              { indexRoutes.map((prop, key) => {return <Route path={prop.path} key={key} component={prop.component}/>;}) }
            </Switch>
          </main>
        </>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default App;

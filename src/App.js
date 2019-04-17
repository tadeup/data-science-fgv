import React from 'react';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import { store } from "./redux/configureStore";
import { rrfProps } from "./firebase";
import indexRoutes from "./router";
import NavBar from "./components/Navbar/Navbar";

import { NAVBAR_HEIGHT } from "./constants";
import Footer from "./components/Footer/Footer";

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <>
          <NavBar />
          <main style={{marginTop: NAVBAR_HEIGHT, minHeight: '61vh'}}>
            <Switch>
              { indexRoutes.map((prop, key) => {return <Route path={prop.path} key={key} component={prop.component}/>;}) }
            </Switch>
          </main>
          <Footer/>
        </>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default App;

import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from 'prop-types';
import intraRoutes from "../../router/intraRoutes";

const Intra = ({ match }) => (
  <div>
    <BrowserRouter>
      <Switch>
        {
          intraRoutes.map((prop, key) => {return <Route exact path={`${match.path}${prop.path}`} key={key} component={prop.component}/>;})
        }
      </Switch>
    </BrowserRouter>
  </div>
);

Intra.propTypes = {};

export default Intra;
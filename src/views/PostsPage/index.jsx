import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from 'prop-types';
import postsRoutes from "../../router/postsRoutes";

const Posts = ({ match }) => (
  <div>
    <Switch>
      {
        postsRoutes.map((prop, key) => {return <Route exact path={`${match.path}${prop.path}`} key={key} component={prop.component}/>;})
      }
    </Switch>
  </div>
);

Posts.propTypes = {};

export default Posts;
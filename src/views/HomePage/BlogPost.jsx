import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import {styles} from "./styles";
import uuidv1 from "uuid";
import firebase from 'firebase';

const BlogPost = props => {
  const { classes } = props;

  const config = {
    apiKey: "AIzaSyCTY1qqnSRV29MiWqr0ohWniXI0YAkUoOc",
    authDomain: "data-science-fgv.firebaseapp.com",
    databaseURL: "https://data-science-fgv.firebaseio.com",
    projectId: "data-science-fgv",
    storageBucket: "data-science-fgv.appspot.com",
    messagingSenderId: "443176770041"
  };

  firebase.initializeApp(config);
  var db = firebase.firestore();

  return (
    <div>
      <h1>title</h1>
      <p>body</p>
    </div>
  );
};

BlogPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogPost);
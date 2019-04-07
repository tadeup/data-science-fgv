import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core";
import {styles} from "./styles";
import uuidv1 from "uuid";
import firebase from 'firebase';
import AuthButton from "../../components/examples/AuthButton";

const BlogPost = props => {
  const { classes } = props;

  return (
    <div>
      <AuthButton/>
      <h1>title</h1>
      <p>body</p>
    </div>
  );
};

BlogPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogPost);
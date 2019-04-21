import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";

const Loader = (props) => {
  const { classes } = props;
  return (
    <div>
      <CssBaseline/>
      <CircularProgress className={classes.progress}/>
    </div>
  );
};

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader)
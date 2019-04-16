import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles";

const Sidebar = (props) => {
  return (
    <>
      <CssBaseline/>
    </>
  );
};

Sidebar.propTypes = {

};

export default withStyles(styles)(Sidebar)


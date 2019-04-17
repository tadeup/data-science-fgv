import React from 'react';
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import Typography from "@material-ui/core/Typography";

const Footer = props => {
  const { classes } = props;
  return (
    <>
      <CssBaseline/>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </>
  );
};

Footer.propTypes = {

};

export default withStyles(styles)(Footer);
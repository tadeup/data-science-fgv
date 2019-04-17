import React from 'react';
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const Footer = props => {
  const { classes } = props;
  return (
    <>
      <CssBaseline/>
      <footer className={classes.footer}>
        <Grid container spacing={16}>
          <Hidden smDown>
            <Grid item md={2}>
              <Typography variant="h6" align="center" gutterBottom>
                Footer
              </Typography>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid item md={5}>
              <Typography variant="h6" align="center" gutterBottom>
                Footer
              </Typography>
            </Grid>
          </Hidden>
          <Grid item xs={12} md={5}>
            <Typography variant="h6"  gutterBottom>
              FGV EESP <br/>
              Núcleo de Estudos de Data Science
            </Typography>
            <Typography variant="subtitle2"  color="textSecondary" component="p">
              Rua Itapeva, 474 - Bela Vista <br/>
              01332-000 - São Paulo - SP - Brasil <br/><br/>
            </Typography>
            <Typography variant="subtitle2"  color="textSecondary" component="p">
              Tel: 55 (11) 9999-9999
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              Fax: 55 (11) 9999-9999
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              Email: nds@fgv.br
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

Footer.propTypes = {

};

export default withStyles(styles)(Footer);
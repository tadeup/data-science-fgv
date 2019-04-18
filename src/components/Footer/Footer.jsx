import React from 'react';
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import logo from '../../assets/logo-desktop.png';
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";

const Footer = props => {
  const { classes } = props;
  const HomeLink = props => <Link to={"/"} {...props}/>;
  return (
    <>
      <CssBaseline/>
      <footer className={classes.footer}>
        <Grid container spacing={16}>
          <Hidden smDown>
            <Grid item md={4}>
              <ButtonBase component={HomeLink} className={classes.navImage}>
                <img src={logo} alt={"FGV"} style={{maxHeight: 90, paddingLeft: 20}}/>
              </ButtonBase>
            </Grid>
            <Grid item md={3}>
              <Typography variant="h6" align="center" gutterBottom color={'inherit'} className={classes.footerText}>
                Contato
              </Typography>
              <Typography variant="subtitle2" align="center" component="p" color={'inherit'} className={classes.footerText}>
                Tel: 55 (11) 9999-9999
              </Typography>
              <Typography variant="subtitle2" align="center" component="p" color={'inherit'} className={classes.footerText}>
                Fax: 55 (11) 9999-9999
              </Typography>
              <Typography variant="subtitle2" align="center" component="p" color={'inherit'} className={classes.footerText}>
                Email: <a href = "mailto: nds@fgv.br">nds@fgv.br</a>
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="h6"  gutterBottom color={'inherit'} className={classes.footerText}>
                FGV EESP <br/>
                Núcleo de Estudos de Data Science
              </Typography>
              <Typography variant="subtitle2"  color="textSecondary" component="p" color={'inherit'} className={classes.footerText}>
                Rua Itapeva, 474 - Bela Vista <br/>
                01332-000 - São Paulo - SP - Brasil <br/><br/>
              </Typography>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={12}>
              <Typography variant="h6" align="center" gutterBottom color={'inherit'} className={classes.footerText}>
                FGV EESP <br/>
                Núcleo de Estudos de Data Science
              </Typography>
              <Typography variant="subtitle2" align="center" color="textSecondary" component="p" color={'inherit'} className={classes.footerText}>
                Rua Itapeva, 474 - Bela Vista <br/>
                01332-000 - São Paulo - SP - Brasil <br/><br/>
              </Typography>
              <Typography variant="h6" align="center" gutterBottom color={'inherit'} className={classes.footerText}>
                Contato
              </Typography>
              <Typography variant="subtitle2" align="center" component="p" color={'inherit'} className={classes.footerText}>
                Tel: 55 (11) 9999-9999
              </Typography>
              <Typography variant="subtitle2" align="center" component="p" color={'inherit'} className={classes.footerText}>
                Fax: 55 (11) 9999-9999
              </Typography>
              <Typography variant="subtitle2" align="center" component="p" color={'inherit'} className={classes.footerText}>
                Email: <a href = "mailto: nds@fgv.br">nds@fgv.br</a>
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      </footer>
    </>
  );
};

Footer.propTypes = {

};

export default withStyles(styles)(Footer);
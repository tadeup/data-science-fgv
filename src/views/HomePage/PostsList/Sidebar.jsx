import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import {Link as RouterLink} from "react-router-dom";
import SearchField from "../../../components/SearchField/SearchField";

const AboutLink = props => <RouterLink to="/about" {...props} />;


const Sidebar = (props) => {
  const { classes } = props;

  return (
    <>
      <CssBaseline/>
      <SearchField/>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          Sobre
        </Typography>
        <Typography>
          O Núcleo de Estudos de Data Science (NDS) foi criado em 2018 como iniciativa das escolas da FGV SP com o
          intuito de realizar, aprofundar e disseminar pesquisas e estudos, bem como colaborar com a formação
          educacional, voltados para ciência de dados aplicada a administração, direito, economia, e ciências
          sociais, de forma a contribuir para o crescimento e aprimoramento de empresas, governo, e organizações como um todo.
          <br/>
          <Link component={AboutLink}>Leia mais...</Link>
        </Typography>
      </Paper>
      {/*<Typography variant="h6" gutterBottom className={classes.sidebarSection}>*/}
      {/*  Social*/}
      {/*</Typography>*/}
    </>
  );
};

Sidebar.propTypes = {

};

export default withStyles(styles)(Sidebar)


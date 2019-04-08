import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles} from "@material-ui/core";
import {styles} from "../styles";
import logo from '../../../assets/logo.svg'

class NavBar extends Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <React.Fragment>
        <AppBar color={'default'}>
          <Toolbar className={classes.toolbarMain}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <img src={logo} alt={"FGV"}/>
              <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={this.handleChange}>
                <Tab label="Blog" />
                <Tab label="Sobre" />
                <Tab label="Eventos" />
              </Tabs>
              <Button color="inherit">Login</Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

NavBar.propTypes = {};

export default withStyles(styles)(NavBar);
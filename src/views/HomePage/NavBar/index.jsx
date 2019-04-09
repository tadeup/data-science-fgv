import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'
import { withStyles} from "@material-ui/core";
import {styles} from "../styles";
import logo from '../../../assets/logo.svg'
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, isEmpty} from "react-redux-firebase";

class NavBar extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  renderIntraButton = () => {
    const RouterLink = props => <Link to="/intra/login" {...props} />;
    if (isEmpty(this.props.auth)) {
      return (
        <Button color="inherit" component={RouterLink}>
          Intra
        </Button>
      )
    } else {
      return (
        <Button color="inherit"
                onClick={
                  async () => {
                    await this.props.firebase.logout();
                    this.props.clearFirestore();
                  }
                }>
          Logout
        </Button>
      )
    }
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
              {this.renderIntraButton()}
            </Grid>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object,
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }),
  clearFirestore: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { auth: state.firebase.auth }
};

const mapDispatchToProps = dispatch => {
  return {
    clearFirestore: () => dispatch({ type: '@@reduxFirestore/CLEAR_DATA' })
  }
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firebaseConnect()
)(withStyles(styles)(NavBar));
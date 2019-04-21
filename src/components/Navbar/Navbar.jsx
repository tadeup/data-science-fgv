import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import {Link, NavLink} from 'react-router-dom'
import { withStyles} from "@material-ui/core";
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, isEmpty, isLoaded} from "react-redux-firebase";
import ButtonBase from "@material-ui/core/ButtonBase";
import DrawerListAuth from "./DrawerListAuth";
import DrawerList from "./DrawerList";
import {styles} from "./styles";
import logo from '../../assets/logo.svg'
import Hidden from '@material-ui/core/Hidden';

class NavBar extends Component {
  state = {
    value: 0,
    isDrawerOpen: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      isDrawerOpen: open,
    });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  renderDrawerList = (auth) => {
    if (!isLoaded(auth)) return <CircularProgress />;
    return isEmpty(auth)
      ? <DrawerList />
      : <DrawerListAuth />
  };

  render() {
    const { classes, auth } = this.props;
    const { value, isDrawerOpen } = this.state;

    const HomeLink = props => <Link to={"/"} {...props}/>;
    const BlogLink = props => <NavLink to={"/blog/pages"} {...props}/>;
    const AboutLink = props => <NavLink to="/about" {...props} />;
    const EventsLink = props => <NavLink to="/events" {...props} />;

    return (
      <React.Fragment>
        <AppBar color={'default'}>
          <Grid
            className={classes.navGrid}
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <ButtonBase component={HomeLink} className={classes.navImage}>
              <img src={logo} alt={"FGV"} />
            </ButtonBase>
            <Hidden smDown>
              <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={this.handleChange}>
                <Tab label="Blog" className={classes.navTabs} component={BlogLink}/>
                <Tab label="Sobre" className={classes.navTabs} component={AboutLink}/>
                <Tab label="Eventos" className={classes.navTabs} component={EventsLink}/>
              </Tabs>
            </Hidden>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Abrir menu lateral" onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Grid>
        </AppBar>
        <Drawer anchor="right" open={isDrawerOpen} onClose={this.toggleDrawer(false)}>
          <div tabIndex={0} role="button" className={classes.navList}
               onClick={this.toggleDrawer(false)}
               onKeyDown={this.toggleDrawer(false)}
          >
              {this.renderDrawerList(auth)}
          </div>
        </Drawer>
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
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  firebaseConnect()
)(NavBar);
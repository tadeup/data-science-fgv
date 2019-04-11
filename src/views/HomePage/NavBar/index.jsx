import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import { withStyles} from "@material-ui/core";
import {styles} from "../styles";
import logo from '../../../assets/logo.svg'
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, isEmpty} from "react-redux-firebase";
import ButtonBase from "@material-ui/core/ButtonBase";

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
        <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Open drawer" onClick={this.toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      )
    }
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    const NewPostLink = props => <Link to="/intra/newpost" {...props} />;
    const ProfileLink = props => <Link to="#" {...props} />;
    const HomeLink = props => <Link to={"/"} {...props}/>;
    const sideList = (
      <div className={classes.list}>

        <ListItem button
                  component={NewPostLink}
                  key={"newpost"}
        >
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={'Novo Artigo'} />
        </ListItem>

        <ListItem button
                  component={ProfileLink}
                  key={"config"}
        >
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={'Configurações'} />
        </ListItem>

        <Divider />

        <List>
          <ListItem button
                    key={"logout"}
                    onClick={
                      async () => {
                        await this.props.firebase.logout();
                        // this.props.clearFirestore();
                      }
                    }>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={'Logout'} />
          </ListItem>
        </List>

      </div>
    );

    return (
      <React.Fragment>
        <AppBar color={'default'}>
          {/*<Toolbar className={classes.toolbarMain}>*/}
            <Grid
              className={classes.navbarGrid}
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >

              <ButtonBase component={HomeLink} className={classes.imageButton}>
                <img src={logo} alt={"FGV"} />
              </ButtonBase>
              <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={this.handleChange}>
                <Tab label="Blog" className={classes.tabs}/>
                <Tab label="Sobre" className={classes.tabs}/>
                <Tab label="Eventos" className={classes.tabs}/>
              </Tabs>
              {this.renderIntraButton()}
            </Grid>
          {/*</Toolbar>*/}
        </AppBar>
        <Drawer anchor="right" open={this.state.isDrawerOpen} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
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
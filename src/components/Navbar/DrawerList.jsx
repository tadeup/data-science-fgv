import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import { styles } from "./styles";
import Hidden from '@material-ui/core/Hidden';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const DrawerList = props => {
  const FeedLink = props => <Link to="/register" {...props} />;
  const ContactLink = props => <Link to="#" {...props} />;
  const LoginLink = props => <Link to="/intra/login" {...props} />;

  const BlogLink = props => <Link to={"/blog/page/1"} {...props}/>;
  const AboutLink = props => <Link to="/about" {...props} />;
  const EventsLink = props => <Link to="/events" {...props} />;

  return (
    <React.Fragment>

      <Hidden mdUp>
        <Divider/>

        <List>
          <ListItem button component={BlogLink} key={"Blog"}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={'Blog'} />
          </ListItem>

          <ListItem button component={AboutLink} key={"Sobre"}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={'Sobre'} />
          </ListItem>

          <ListItem button component={EventsLink} key={"Eventos"}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={'Eventos'} />
          </ListItem>

        </List>
      </Hidden>

      <Divider/>

      <List>
      <ListItem button component={FeedLink} key={"feed"}>
        <ListItemIcon><InboxIcon /></ListItemIcon>
        <ListItemText primary={'Cadastrar e-mail'} />
      </ListItem>

      <ListItem button component={ContactLink} key={"contact"}>
        <ListItemIcon><InboxIcon /></ListItemIcon>
        <ListItemText primary={'Contato'} />
      </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button component={LoginLink} key={"login"}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={'Portal do Professor'} />
        </ListItem>
      </List>

    </React.Fragment>
  );
};

DrawerList.propTypes = {
  firebase: PropTypes.shape({
    logout: PropTypes.func.isRequired
  })
};

export default compose(
  withStyles(styles),
  firebaseConnect()
)(DrawerList);
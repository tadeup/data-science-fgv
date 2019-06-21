import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Settings as SettingsIcons, ExitToApp as ExitIcons } from "@material-ui/icons"
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { withStyles} from "@material-ui/core";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import { styles } from "./styles";
import Hidden from '@material-ui/core/Hidden';

const DrawerListAuth = props => {
  const NewPostLink = props => <Link to="/intra/newpost" {...props} />;
  const NewEventLink = props => <Link to="/intra/newevent" {...props} />;
  const SettingsLink = props => <Link to="/intra/settings" {...props} />;

  const BlogLink = props => <Link to={"/blog/pages"} {...props}/>;
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
        <ListItem button component={NewPostLink} key={"newpost"}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={'Novo Artigo'} />
        </ListItem>

        <ListItem button component={NewEventLink} key={"newevent"}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={'Novo Evento'} />
        </ListItem>

        <ListItem button component={SettingsLink} key={"config"}>
          <ListItemIcon><SettingsIcons/></ListItemIcon>
          <ListItemText primary={'Configurações'} />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button key={"logout"} onClick={() => {props.firebase.logout();}}>
          <ListItemIcon><ExitIcons /></ListItemIcon>
          <ListItemText primary={'Logout'} />
        </ListItem>
      </List>
    </React.Fragment>
  );
};

DrawerListAuth.propTypes = {
  firebase: PropTypes.shape({
    logout: PropTypes.func.isRequired
  })
};

export default compose(
  withStyles(styles),
  firebaseConnect()
)(DrawerListAuth);
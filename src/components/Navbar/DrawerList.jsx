import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { withStyles} from "@material-ui/core";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import { styles } from "./styles";

const DrawerList = props => {
  const FeedLink = props => <Link to="#" {...props} />;
  const ContactLink = props => <Link to="#" {...props} />;
  const LoginLink = props => <Link to="/intra/login" {...props} />;

  return (
    <React.Fragment>

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
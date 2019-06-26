import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import { actionTypes } from "redux-firestore";
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import {Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, withStyles} from "@material-ui/core";
import { styles } from "./styles";

// STATEFUL
class SettingsPage extends Component {
  state = {  };

  render() {
    const {classes, users} = this.props;
    return (
      <>
        <CssBaseline/>
        <main className={classes.main}>
          <Grid
            container
            spacing={16}
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={4}>
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>email</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((el, key) => {
                      return(
                        <TableRow key={key}>
                          <TableCell>{el.email}</TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </main>
      </>
    );
  }
}

SettingsPage.propTypes = {

};

const mapStateToProps = state => {
  return {
    users: state.firestore.ordered.users ? state.firestore.ordered.users : [],
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clearFirestore: () => dispatch({ type: actionTypes.CLEAR_DATA })
  }
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(
    (props) => {
      return [
        {
          collection: 'users',
          orderBy: ['email'],
        },
      ]
    }
  ),
)(SettingsPage)
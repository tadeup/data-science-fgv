import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import { actionTypes } from "redux-firestore";
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import {Grid, Paper, withStyles} from "@material-ui/core";
import { styles } from "./styles";

// STATEFUL
class SettingsPage extends Component {
  state = {  };

  render() {
    const {classes} = this.props;
    return (
      <>
        <CssBaseline/>
        <main className={classes.main}>
          <Paper>
            <Grid
              container
              spacing={16}
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid item>
                a
              </Grid>
            </Grid>
          </Paper>
        </main>
      </>
    );
  }
}

SettingsPage.propTypes = {

};

const mapStateToProps = state => {
  return {

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
  firestoreConnect(),
)(SettingsPage)
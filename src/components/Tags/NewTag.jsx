import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import { actionTypes } from "redux-firestore";
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import {Button, Grid, TextField, withStyles} from "@material-ui/core";
import { styles } from "./styles";

// STATELESS
class NewTag extends Component {
  state = { tagName: '' };

  handleChange = event => {
    this.setState({
      tagName: event.target.value,
    });
  };

  handleSubmit = () => {
    this.props.firestore.add(
      { collection: 'tags'},
      {
        tagName: this.state.tagName
      }
    ).then((data) => {
      this.setState({ tagName: '' })
    })
  };

  render() {
    return (
      <>
        <CssBaseline/>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-end"
          spacing={16}
        >
          <Grid item>
            <TextField
              label="Nova Tag"
              placeholder="Nova Tag"
              type="text"
              value={this.state.tagName}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item>
            <Button onClick={this.handleSubmit}>submit</Button>
          </Grid>
        </Grid>
      </>
    );
  }
}


NewTag.propTypes = {

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
)(NewTag)
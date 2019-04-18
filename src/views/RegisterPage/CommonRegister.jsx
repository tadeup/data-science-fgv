import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";
import Divider from "@material-ui/core/es/Divider/Divider";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/es/Typography/Typography";
import SendIcon from '@material-ui/icons/Send';
import IconButton from "@material-ui/core/es/IconButton/IconButton";

// STATEFUL
class CommonRegister extends Component {
  state = {  };

  render() {
    const {classes} = this.props;
    return (
      <>
        <CssBaseline/>
        <div className={classes.main}>
          <div className={classes.card}>

            <div className={classes.section1}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                  <Typography gutterBottom variant="h4">
                    Registrar email
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction="column" justify="center" alignItems="stretch">
                <Grid item>
                  <TextField
                    id="outlined-email-input"
                    label="Email"
                    fullWidth
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container direction="column" justify="center" alignItems="stretch">
                <Grid item>
                  <Button variant="outlined" color="primary" fullWidth>
                    Salvar
                  </Button>
                </Grid>
              </Grid>

            </div>

            <Divider variant="middle" />

            <div className={classes.section2}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                  <Typography gutterBottom variant="body1">
                    Ou entre com suas mídias sociais
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction="row" justify="center" alignItems="center">
                <IconButton aria-label={'facebook'}>
                  <i className={"fab fa-facebook"} />
                </IconButton>
                <IconButton aria-label={'facebook'}>
                  <i className={"fab fa-twitter"} />
                </IconButton>
                <IconButton aria-label={'facebook'}>
                  <i className={"fab fa-google"} />
                </IconButton>
              </Grid>
            </div>
            <div className={classes.section3}>

            </div>

          </div>
        </div>


      </>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
  return {
    clearFirestore: () => dispatch({ type: '@@reduxFirestore/CLEAR_DATA' })
  }
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(),
)(CommonRegister)
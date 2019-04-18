import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { styles } from "./styles";
import {compose} from "redux";
import {connect} from "react-redux";
import { Redirect } from "react-router-dom";
import {firebaseConnect, isEmpty, isLoaded} from "react-redux-firebase";

function SignIn(props) {
  const { classes } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    props.firebase.login({
      email: event.target.email.value,
      password: event.target.password.value
    });
  };

  if (!isLoaded(props.auth)) {
    return null
  }
  if (isEmpty(props.auth)) {
    return (
      <main className={classes.main}>
        <CssBaseline/>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Senha</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password"/>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary"/>}
              label="Manter-me conectado"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
          </form>
        </Paper>
      </main>
    );
  } else {
    return (
      <Redirect exact to={'/'}/>
    )
  }
}

SignIn.propTypes = {
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
)(SignIn)

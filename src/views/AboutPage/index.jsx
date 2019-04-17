import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";

const AboutPage = (props) => {
  const { classes } = props;
  return (
    <div className={classes.layout}>
      <CssBaseline/>
      <Typography component="h1" variant="h3">
        Quem Somos
      </Typography>
      <br/>

      <Typography component='p' variant='h6'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, justo ac eleifend sollicitudin, mi mauris aliquet justo, quis malesuada quam sem luctus nunc. Ut sollicitudin hendrerit lobortis. Sed sagittis, tortor in faucibus pretium, ipsum ante gravida erat, at vestibulum sem mi at nunc. Sed vel tellus urna. In hac habitasse platea dictumst. Suspendisse id nisl ac nibh blandit vulputate. Fusce et risus vehicula, vestibulum turpis eu, porttitor felis. Quisque ullamcorper semper diam a tincidunt. Nullam tempor dolor et tincidunt sollicitudin. Vestibulum a turpis vel neque posuere sodales. Duis placerat feugiat risus ut aliquam. Donec lectus urna, tristique ut lobortis nec, aliquam vel erat.
      </Typography>
      <br/>

      <Typography component='p' variant='h6'>
        In fringilla porttitor mauris. Nulla tristique iaculis suscipit. Quisque efficitur odio ipsum, non congue nisi posuere sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula risus consequat, bibendum augue at, laoreet odio. Mauris maximus mollis urna id placerat. Aliquam interdum at ligula eu congue. Sed nec metus et augue rutrum ornare non nec sem. Suspendisse potenti.
      </Typography>
      <br/>

      <Typography component='p' variant='h6'>
        Praesent at elit vulputate, sodales justo eget, luctus enim. Pellentesque varius sollicitudin enim, tempor gravida ipsum viverra quis. Quisque nec pretium velit, vel vestibulum dui. Maecenas scelerisque, mi in efficitur vehicula, nulla diam ultrices nisl, vel eleifend arcu mauris in risus. Quisque nec sem sed enim scelerisque vulputate ut eu dui. Etiam id ligula libero. Morbi imperdiet odio molestie nulla auctor rhoncus blandit vitae justo. Curabitur iaculis, nibh ut hendrerit ullamcorper, sapien turpis tempor ipsum, et commodo lectus sapien a erat.
      </Typography>

    </div>
  );
};

AboutPage.propTypes = {

};

const mapStateToProps = state => {
  return {}
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
)(AboutPage)
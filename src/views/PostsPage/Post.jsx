import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CssBaseline, withStyles} from "@material-ui/core";
import {styles} from "../HomePage/styles";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import NavBar from "../HomePage/NavBar";
import Typography from "@material-ui/core/Typography";
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect, isLoaded, isEmpty} from "react-redux-firebase";
import moment from 'moment'

function Post(props) {
  const { classes, match, post } = props;
  if (isEmpty(post)) return null;
  const postDate = moment(post.postDate.toDate()).locale('pt-BR').format('DD MM YYYY');
  return (
    <React.Fragment>
      <CssBaseline/>
      <div className={classes.layout}>
        <NavBar/>
        <main className={classes.main}>
          <Grid container spacing={16}>
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <Typography component={'h1'} variant={"h4"}>
                  {post.postTitle}
                </Typography>
                <Typography component={'h1'} variant={"body1"}>
                  {post.authorId}
                </Typography>
                <Typography component={'h1'} variant={"body1"}>
                  {postDate}
                </Typography>
                <Typography component={'h1'} variant={"body1"}>
                  {post.postBody}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper >
                POSTS PAGE {match.params.postid}
              </Paper>
            </Grid>
          </Grid>
        </main>

      </div>
    </React.Fragment>
  );
}

Post.propTypes = {};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    post: state.firestore.ordered.posts
      ? state.firestore.ordered.posts[0]
      : []
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
  firestoreConnect((props) => {
      return [
        {
          collection: 'posts',
          doc: props.match.params.postid,
        }
      ]
    }
  )
)(Post);
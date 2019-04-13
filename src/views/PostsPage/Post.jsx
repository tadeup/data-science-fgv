import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CssBaseline, withStyles} from "@material-ui/core";
import {styles} from "../HomePage/styles";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect, isLoaded, isEmpty} from "react-redux-firebase";
import moment from 'moment'
import NoPost from "./NoPost";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import Card from "@material-ui/core/es/Card/Card";

function Post(props) {
  const { classes, match, post } = props;
  if (!isLoaded(post)) return <CircularProgress />;
  if (isEmpty(post)) return <NoPost />;
  const postDate = moment(post.postDate.toDate()).locale('pt-BR').format('DD MM YYYY');
  return (
    <React.Fragment>
      <CssBaseline/>
      <div className={classes.layout}>
        <main className={classes.main}>
          <Grid container spacing={16}>
            <Grid item xs={8}>
              <Card className={classes.paper}>
                <CardMedia
                  className={classes.media}
                  image={post.postImgUrl}
                  title="post image"
                />
                <Typography component={'h1'} variant={"h4"}>
                  {post.postTitle}
                </Typography>
                <Typography component={'h1'} variant={"body1"}>
                  {post.postAuthor}
                </Typography>
                <Typography component={'h1'} variant={"body1"}>
                  {postDate}
                </Typography>
                <Typography component={'h1'} variant={"body1"}>
                  {post.postBody}
                </Typography>
              </Card>
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
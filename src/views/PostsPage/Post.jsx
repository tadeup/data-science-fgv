import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CssBaseline, withStyles} from "@material-ui/core";
import {styles} from "./styles";
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
import TextField from "@material-ui/core/es/TextField/TextField";
import SearchIcon from '@material-ui/icons/Search';
import Chip from "@material-ui/core/es/Chip/Chip";


const sidebarNews = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa leo',
  'Nunc ullamcorper ultrices lacinia. Nulla a lacus pulvinar',
  'Duis lacinia volutpat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  'Ut pharetra laoreet rutrum.',
  'Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla aliquet lobortis est ac pulvinar.'
];

const tags = [
  'Proin', 'aliquet', 'pretium', 'suscipit', 'Duis', 'dictum', 'orci', 'quis', 'metus', 'sollicitudin'
];

function Post(props) {
  const { classes, match, post } = props;
  if (!isLoaded(post)) return <CircularProgress />;
  if (isEmpty(post)) return <NoPost />;
  const postDate = moment(post.postDate.toDate()).locale('pt-BR').format('DD MM YYYY [às] HH:mm');
  return (
    <React.Fragment>
      <CssBaseline/>
        <main className={classes.main}>
          <Grid container spacing={16}>
            <Grid item xs={8}>
              <div className={classes.paper}>

                <Typography component={'h1'} variant={"body1"} className={classes.postInfo}>
                  {postDate} &nbsp; &nbsp;| &nbsp; &nbsp; por {post.postAuthor}
                </Typography>

                <Typography component={'h1'} variant={"h4"} className={classes.postTitle}>
                  {post.postTitle}
                </Typography>

                <CardMedia
                  className={classes.media}
                  image={post.postImgUrl}
                  title="post image"
                />

                <Typography component={'h1'} variant={"body1"}>
                  {post.postBody}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ borderLeft: '1px solid gray', paddingLeft: 20}}>
                <Grid container spacing={8} alignItems="flex-end">
                  <Grid item xs={2} md={1}>
                    <SearchIcon />
                  </Grid>
                  <Grid item xs={10} md={11}>
                    <TextField
                      id="standard-search"
                      label="Busca no blog"
                      type="search"
                      className={classes.textField}
                      margin="normal"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Typography component={'h3'} variant={'h5'}>
                  Posts relacionados
                </Typography>
                <ol>
                  {sidebarNews.map((el, key) => {
                    return(
                      <li key={key}>{el}</li>
                    )
                  })}
                </ol>

                <Typography component={'h3'} variant={'h5'}>
                  Tags
                </Typography>
                {tags.map((el, key) => {
                  return <Chip key={key} label={el} variant="outlined"/>
                })}
              </div>
            </Grid>
          </Grid>
        </main>

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
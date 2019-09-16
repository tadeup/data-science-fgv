import React, {Component, useEffect} from 'react';
import PropTypes from 'prop-types';
import {CssBaseline, List, ListItem, withStyles} from "@material-ui/core";
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
import SearchField from "../../components/SearchField/SearchField";
import {actionTypes} from "redux-firestore";
import Loader from "../../components/Loader/Loader";
import ReactMarkdown from 'react-markdown/with-html'
import {Link} from "react-router-dom";

function Post(props) {

  const { classes, match, postArray, sidebarNews } = props;

  if (!isLoaded(postArray)) return <Loader/> ;
  if (isEmpty(postArray)) return <NoPost />;

  const post = postArray[0];

  const postDate = moment(post.postDate.toDate()).locale('pt-BR').format('DD MM YYYY [às] HH:mm');

  //mount effect
  useEffect( () => window.scrollTo(0, 0), [] );
  //unmount effect
  useEffect( () => () => props.clearFirestore(), [] );

  const sidebarLink = props => {
    return <Link {...props} />;
  };

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
                  <ReactMarkdown source={post.postBody} escapeHtml={false}/>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4} className={classes.sidebarGrid}>
              <div className={classes.sidebarContainer}>
                <SearchField/>
                <Typography component={'h3'} variant={'h5'}>
                  Novidades
                </Typography>
                <List>
                  {sidebarNews.map((el, key) => {
                    return(
                      <ListItem button component={sidebarLink} to={`/posts/${el.id}`} key={key}>{el.postTitle}</ListItem>
                    )
                  })}
                </List>

                <Typography component={'h3'} variant={'h5'}>
                  Tags
                </Typography>
                {post.tags.map((el, key) => {
                  return <Chip key={key} label={el} variant="outlined" className={classes.tagsChip}/>
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
    postArray: state.firestore.ordered.post,
    sidebarNews: state.firestore.ordered.sidePosts ? state.firestore.ordered.sidePosts : []
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clearFirestore: () => dispatch({ type: actionTypes.CLEAR_DATA, preserve: { data: ['posts'], ordered: ['posts'] } })
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
          storeAs: 'post'
        },
        {
          collection: 'posts',
          limit: 5,
          orderBy: ['postDate', 'desc'],
          storeAs: 'sidePosts'
        }
      ]
    }
  )
)(Post);
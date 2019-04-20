import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/es/CardMedia";
import SearchField from "../../components/SearchField/SearchField";
import Chip from "@material-ui/core/es/Chip";
import Divider from "@material-ui/core/Divider";
import PostElement from "../HomePage/PostsList/PostElement";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/es/Button";
import { goToNext, goToPrev } from "./redux/actions";

const mostRead = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et massa leo',
  'Nunc ullamcorper ultrices lacinia. Nulla a lacus pulvinar',
  'Duis lacinia volutpat porta. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
  'Ut pharetra laoreet rutrum.',
  'Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla aliquet lobortis est ac pulvinar.'
];

// STATELESS
const BlogPagination = (props) => {
  const renderPost = (post, key) => {
    return (
      <PostElement post={post} key={key}/>
    )
  };
  const { classes, blogPage } = props;
  const page = parseInt(props.match.params.page);

  const BackLink = props => <Link to={`/blog/page/${blogPage.lastDates}`} {...props}/>;
  const NextLink = props => <Link to={`/blog/page/${lastDate}`} {...props}/>;

  const posts = props.posts.map((post, key) => renderPost(post, key));

  const handlePageChange = (button) => {
    if (button === 'next') {
      props.goToNext(lastDate)
    } else if (button === 'prev') {
      props.goToPrev(lastDate)
    }
  };

  let lastDate;
  if (isLoaded(props.posts) && !isEmpty(props.posts)) {
    lastDate = props.posts[props.posts.length - 1].postDate.toDate();
  }

  return (
    <React.Fragment>
      <CssBaseline/>
      <main className={classes.main}>
        <Grid container spacing={16}>
          <Grid item xs={8}>
            <div className={classes.paper}>

              <Typography variant="h6" gutterBottom style={{letterSpacing: 0.1 + 'em'}}>
                POSTS
              </Typography>
              <Divider />
              {posts}

              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.pageNavigator}
              >
                <Grid item>
                  <IconButton
                    onClick={() => handlePageChange('prev')}
                    component={BackLink}
                    disabled={page <= 1}
                    aria-label="Next Page"
                  >
                    <KeyboardArrowLeft />
                  </IconButton>

                  <Button color="primary" disabled>
                    Página {page}
                  </Button>

                  <IconButton
                    onClick={() => handlePageChange('next')}
                    component={NextLink}
                    disabled={posts.length % 10 > 0}
                    aria-label="Next Page"
                  >
                    <KeyboardArrowRight />
                  </IconButton>
                </Grid>
              </Grid>

            </div>
          </Grid>
          <Grid item xs={4} className={classes.sidebarGrid}>
            <div className={classes.sidebarContainer}>
              <SearchField/>
              <Typography component={'h3'} variant={'h5'}>
                Mais Lidas
              </Typography>
              <ol>
                {mostRead.map((el, key) => {
                  return(
                    <li key={key}>{el}</li>
                  )
                })}
              </ol>
            </div>
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  );
};

BlogPagination.propTypes = {

};

const mapStateToProps = state => {
  return {
    posts: state.firestore.ordered.posts
      ? state.firestore.ordered.posts
      : [],
    blogPage: state.blogPage
  }
};

const mapDispatchToProps = dispatch => {
  return {
    goToNext: lastDate => dispatch(goToNext(lastDate)),
    goToPrev: lastDate => dispatch(goToPrev(lastDate)),
  }
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: 'posts',
        orderBy: ['postDate', 'desc'],
        where: [
          ['postDate',  '<', new Date()],
        ],
        limit: 10
      }
    ]
  }),
)(BlogPagination)
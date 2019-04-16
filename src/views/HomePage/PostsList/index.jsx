import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { withStyles } from "@material-ui/core/styles";
import PostElement from "./PostElement";
import { styles } from "../styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import FeaturedPost from "./FeaturedPost";

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

class PostsList extends Component {
  renderPost(post, key) {
    return (
      <PostElement post={post} key={key}/>
    )
  }
  render() {
    const posts = this.props.posts.map((post, key) => this.renderPost(post, key));
    const { classes } = this.props;

    return (
      <React.Fragment>

        <Grid container spacing={40} className={classes.cardGrid}>
          {featuredPosts.map((post, key) => (
            <FeaturedPost post={post} key={key}/>
          ))}
        </Grid>

        <Grid container spacing={40} className={classes.mainGrid}>

          <Grid item xs={12} md={8}>
            <Typography variant="h6" gutterBottom style={{letterSpacing: 0.1 + 'em'}}>
              POSTS
            </Typography>
            <Divider />
            {posts}
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
              </Typography>
            </Paper>
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
              Archives
            </Typography>
            {archives.map(archive => (
              <Typography key={archive}>{archive}</Typography>
            ))}
            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
              Social
            </Typography>
            {social.map(network => (
              <Typography key={network}>{network}</Typography>
            ))}
          </Grid>

        </Grid>
      </React.Fragment>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    postBody: PropTypes.string.isRequired,
    postTitle: PropTypes.string.isRequired,
    postDate: PropTypes.isRequired,
    id: PropTypes.string
  })),
};

const mapStateToProps = state => {
  return {
    posts: state.firestore.ordered.posts
      ? state.firestore.ordered.posts
      : [],
  }
};

const mapDispatchToProps = {};


export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
      return [
        {
          collection: 'posts',
        }
      ]
    }
  )
)(PostsList)
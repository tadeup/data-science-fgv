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
import Sidebar from "./Sidebar";
import Button from "@material-ui/core/es/Button/Button";
import {NavLink} from "react-router-dom";

const featuredPosts = [
  {
    title: 'Primeiro em destaque',
    date: 'Nov 12',
    description:
      'Ut sed cursus odio. Donec massa nulla, fermentum sed luctus ac, posuere vitae risus.',
  },
  {
    title: 'Segundo em destaque',
    date: 'Nov 11',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dictum commodo est.',
  },
];

const BlogLink = props => <NavLink to={"/blog/pages"} {...props}/>;

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
          {this.props.featuredPosts.map((post, key) => (
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
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Button variant="outlined" color="primary" className={classes.moreButton} component={BlogLink}>
                  Ver Mais
                </Button>
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={12} md={4}>
            <Sidebar/>
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
    featuredPosts: state.firestore.ordered.featuredPosts
      ? state.firestore.ordered.featuredPosts
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
          orderBy: ['postDate', 'desc'],
          limit: 9
        },
        {
          collection: 'posts',
          where: ['destaque', '==', true],
          limit: 2,
          storeAs: 'featuredPosts'
        },
      ]
    }
  )
)(PostsList)
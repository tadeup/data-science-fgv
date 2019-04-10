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

class PostsList extends Component {
  renderPost(post, key) {
    return (
      <PostElement post={post} key={key}/>
    )
  }
  render() {
    const posts = this.props.posts.map((post, key) => this.renderPost(post, key));
    return (
      <React.Fragment>
        {posts}
      </React.Fragment>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    authorId: PropTypes.string.isRequired,
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
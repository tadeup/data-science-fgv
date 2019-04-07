import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        POSTS PAGE {this.props.match.params.postid}
      </div>
    );
  }
}

Post.propTypes = {};

export default Post;
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NoPost extends Component {
  render() {
    return (
      <div>
        POST NOT FOUND
      </div>
    );
  }
}

NoPost.propTypes = {};

export default NoPost;
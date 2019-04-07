import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class NewPost extends Component {
  state = {postTitle: '', postBody: ''};
  addPost() {
    this.props.firestore.add(
      { collection: 'posts' },
      {
        authorId: 'test',
        postTitle: this.state.postTitle,
        postBody: this.state.postBody,
        postDate: this.props.firestore.Timestamp.fromDate(new Date())
      }
    );
    this.setState({ postTitle: '', postBody: '' })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.postTitle}
          onChange={(evt) => this.setState({ postTitle: evt.target.value })}
        />
        <input
          type="text"
          value={this.state.postBody}
          onChange={(evt) => this.setState({ postBody: evt.target.value })}
        />
        <button onClick={(evt) => this.addPost()}>Post</button>
      </div>
    );
  }
}

NewPost.propTypes = {
  uid: PropTypes.string,
  firestore: PropTypes.shape({
    add: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid,
  }
};

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(),
)(NewPost)
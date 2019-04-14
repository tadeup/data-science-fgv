import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Uploader from "../../components/Uploader/Uploader";
import { styles } from "./styles";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";
import ImagePreview from "../../components/Uploader/ImagePreview";

const standardUrl = 'https://firebasestorage.googleapis.com/v0/b/data-science-fgv.appspot.com/o/uploadedFiles%2Funnamed.jpg?alt=media&token=226114d9-cb5b-4ad2-a4e0-52ccd8582490'

class NewPost extends Component {
  state = { postTitle: '', postBody: '',  postAuthor: 'Roshman', postImgUrl: standardUrl };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => event => {
    this.props.firestore.add(
      { collection: 'posts' },
      {
        postAuthor: this.state.postAuthor,
        postTitle: this.state.postTitle,
        postBody: this.state.postBody,
        postImgUrl: this.state.postImgUrl,
        postDate: this.props.firestore.Timestamp.fromDate(new Date()),
        postOpId: this.props.uid
      }
    );
    this.setState({ postTitle: '', postBody: '',  postAuthor: 'Roshman' });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      const {stagedImages} = this.props.newPost;
      if (stagedImages) {
        this.setState({postImgUrl: stagedImages});
      } else {
        this.setState({postImgUrl: standardUrl});
      }
    }
  }

  render() {
    const {classes} = this.props;
    return (
      <main>
        <CssBaseline/>
        <Paper className={classes.layout}>
          <TextField id="post-title"
                     label="Título"
                     placeholder="Título"
                     multiline
                     fullWidth
                     className={classes.postTitle}
                     margin="normal"
                     value={this.state.postTitle}
                     onChange={this.handleChange('postTitle')}
          />
          <TextField id="post-body"
                     label="Corpo da postagem"
                     placeholder="Corpo da postagem"
                     multiline
                     fullWidth
                     className={classes.postBody}
                     margin="normal"
                     value={this.state.postBody}
                     onChange={this.handleChange('postBody')}
                     variant="outlined"
                     rows={10}
          />
          <TextField id="post-author"
                     label="Autor(a)"
                     placeholder="Autor(a)"
                     className={classes.postAuthor}
                     margin="normal"
                     value={this.state.postAuthor}
                     onChange={this.handleChange('postAuthor')}
          />
          <Button variant="contained"
                  color="primary"
                  onClick={this.handleSubmit()}>
            Post
          </Button>
          <Uploader/>
          <ImagePreview/>
        </Paper>
      </main>
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
    newPost: state.newPost
  }
};

const mapDispatchToProps = {};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(),
)(NewPost)
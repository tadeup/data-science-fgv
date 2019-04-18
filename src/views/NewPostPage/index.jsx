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
import Grid from '@material-ui/core/Grid';
import ImagePreview from "../../components/Uploader/ImagePreview";
import ReactMde from "react-mde";
import Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const standardUrl = 'https://firebasestorage.googleapis.com/v0/b/data-science-fgv.appspot.com/o/defaultFiles%2Funnamed.jpg?alt=media&token=6a44a8d1-15a1-45d7-af46-87ec7ca503c2';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tab: "write",
      postTitle: '',
      postBody: '',
      postAuthor: 'Roshman'
    };
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleValueChange = (postBody) => {
    this.setState({postBody});
  };

  handleTabChange = (tab) => {
    this.setState({tab})
  };

  handleSubmit = () => event => {
    const postShorty = this.state.postBody.length > 140
      ? `${this.state.postBody.substring(0, 140)}...`
      : this.state.postBody;
    const postImgUrl = this.props.newPost.stagedImages.length
      ? this.props.newPost.stagedImages.find(el => el.isHeader).url
      : standardUrl;

    this.props.firestore.add(
      { collection: 'posts' },
      {
        postAuthor: this.state.postAuthor,
        postTitle: this.state.postTitle,
        postShorty,
        postBody: this.state.postBody,
        postImgUrl,
        postDate: this.props.firestore.Timestamp.fromDate(new Date()),
        postOpId: this.props.uid
      }
    );
    this.setState({ postTitle: '', postBody: '',  postAuthor: 'Roshman' });
  };

  render() {
    const {classes} = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline/>
        <Paper className={classes.paper}>
          <Grid
            container
            spacing={16}
            direction="row"
          >
            <Grid item xs={9}>
              <TextField id="post-title"
                         label="Título"
                         placeholder="Título"
                         fullWidth
                         className={classes.postTitle}
                         margin="normal"
                         value={this.state.postTitle}
                         onChange={this.handleChange('postTitle')}
              />
            </Grid>
            <Grid item>
              <TextField id="post-author"
                         label="Autor(a)"
                         placeholder="Autor(a)"
                         fullWidth
                         className={classes.postAuthor}
                         margin="normal"
                         value={this.state.postAuthor}
                         onChange={this.handleChange('postAuthor')}
              />
            </Grid>
          </Grid>
          <ReactMde
            onChange={this.handleValueChange}
            onTabChange={this.handleTabChange}
            value={this.state.postBody}
            generateMarkdownPreview={markdown =>
              Promise.resolve(this.converter.makeHtml(markdown))}
            selectedTab={this.state.tab}
            className={classes.mdeEditor}
          />
          <Uploader/>
          <ImagePreview/>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.postButton}
          >
            <Grid item>
              <Button variant="contained"
                      color="primary"
                      onClick={this.handleSubmit()}>
                Post
              </Button>
            </Grid>
          </Grid>

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
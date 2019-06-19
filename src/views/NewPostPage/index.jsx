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
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import Chip from "@material-ui/core/es/Chip/Chip";
import {actionTypes} from "redux-firestore";
import NewTag from "../../components/Tags/NewTag";
import Input from "@material-ui/core/es/Input/Input";

const standardUrl = 'https://firebasestorage.googleapis.com/v0/b/data-science-fgv.appspot.com/o/defaultFiles%2Funnamed.jpg?alt=media&token=6a44a8d1-15a1-45d7-af46-87ec7ca503c2';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, that) {
  return {
    fontWeight:
      that.state.tags.indexOf(name) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium,
  };
}

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tab: "write",
      postTitle: '',
      postSubtitle: '',
      postBody: '',
      postAuthor: 'Roshman',
      tags: []
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
    const postImgUrl = this.props.newPost.stagedImages.length
      ? this.props.newPost.stagedImages.find(el => el.isHeader).url
      : standardUrl;

    this.props.firestore.add(
      { collection: 'posts' },
      {
        postAuthor: this.state.postAuthor,
        postTitle: this.state.postTitle,
        postSubtitle: this.state.postSubtitle,
        postBody: this.state.postBody,
        tags: this.state.tags,
        postImgUrl,
        postDate: this.props.firestore.Timestamp.fromDate(new Date()),
        postOpId: this.props.uid,
        destaque: false
      }
    ).then(() => {
      this.props.clearFirestore()
    });
    this.setState({ postTitle: '', postSubtitle: '', postBody: '',  postAuthor: 'Roshman', tags: [] });
  };

  handleSubtitle = event => {
    if (event.target.value.length < 100) {
      this.setState({
        postSubtitle: event.target.value,
      });
    } else {
      this.setState({
        postSubtitle: event.target.value.substring(0, 100),
      });
    }
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
            <Grid item xs={3}>
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
          <Grid
            container
            spacing={16}
            direction={'row'}
          >
            <Grid item xs={12}>
              <TextField label={'Sub-título'}
                         placeholder={'Sub-titulo'}
                         fullWidth
                         className={classes.postTitle}
                         value={this.state.postSubtitle}
                         onChange={this.handleSubtitle}
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

          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={16}
          >
            <Grid item>
              <FormControl className={classes.tagsControl}>
                <InputLabel htmlFor="select-multiple-chip">Tags</InputLabel>
                <Select
                  multiple
                  value={this.state.tags}
                  onChange={this.handleChange('tags')}
                  input={<Input id="select-multiple-chip" />}
                  renderValue={selected => (
                    <div className={classes.chips}>
                      {selected.map(value => (
                        <Chip key={value} label={value} className={classes.chip} />
                      ))}
                    </div>
                  )}
                  MenuProps={MenuProps}
                >
                  {this.props.tagNames.map(name => (
                    <MenuItem key={name} value={name} style={getStyles(name, this)}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <NewTag/>
            </Grid>
          </Grid>


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
    newPost: state.newPost,
    tagNames: state.firestore.ordered.tags
      ? state.firestore.ordered.tags.map(el => el.tagName)
      : []
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clearFirestore: () => dispatch({ type: actionTypes.CLEAR_DATA })
  }
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: 'tags',
        orderBy: ['tagName']
      }
    ]
  }),
)(NewPost)
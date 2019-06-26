import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect, firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { actionTypes } from "redux-firestore";
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import {List, ListItem, withStyles} from "@material-ui/core";
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
import { gotoNext, gotoPrev, leavePage } from "./redux/actions";
import Loader from "../../components/Loader/Loader";

// const BackLink = props => <Link to={`/blog/page/${page - 1}`} {...props}/>;
// const NextLink = props => <Link to={`/blog/page/${page + 1}`} {...props}/>;

  // if (isLoaded(props.firebase)) {
  //   console.log(props.lastPost[props.lastPost.length - 1]);
  //   props.firestore.collection('posts').doc('EV96KXWBRGegptc8cX0S').get().then(data => console.log(data));
  //   console.log(props);
  // }
const sidebarLink = props => {return <Link {...props} />;};

class BlogPagination extends Component {
  state = { page: 1, isLoading: false };

  renderPost = (post, key) => {
    return (
      <PostElement post={post} key={key}/>
    )
  };

  handlePrevPage = () => {
    this.props.clearFirestore();
    window.scrollTo(0, 0);
    this.setState({page: this.state.page - 1});
    this.props.gotoPrev(this.props.posts[this.props.posts.length-1])
  };

  handleNextPage = () => {
    this.props.clearFirestore();
    window.scrollTo(0, 0);
    const lastPostId = this.props.posts[this.props.posts.length - 1].id;
    this.setState({page: this.state.page + 1, isLoading: true});
    this.props.firestore.collection('posts').doc(lastPostId).get()
      .then(data => {
        this.props.gotoNext(data);
        this.setState({isLoading: false});
      });

  };

  render() {
    const { classes, sidebarNews } = this.props;
    const { isLoading } = this.state;

    if (isLoading || !isLoaded(this.props.posts)) return <Loader/> ;

    const posts = this.props.posts.map((post, key) => {return this.renderPost(post, key)});

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
                      onClick={this.handlePrevPage}
                      disabled={this.state.page <= 1}
                      aria-label="Next Page"
                    >
                      <KeyboardArrowLeft />
                    </IconButton>

                    <Button color="primary" disabled>
                      Página {this.state.page}
                    </Button>

                    <IconButton
                      onClick={this.handleNextPage}
                      disabled={!!posts.length && posts.length % 10 > 0}
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
                  Novidades
                </Typography>
                <List>
                  {sidebarNews.map((el, key) => {
                    return(
                      <ListItem button component={sidebarLink} to={`/posts/${el.id}`} key={key}>{el.postTitle}</ListItem>
                    )
                  })}
                </List>
              </div>
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentWillUnmount() {
    this.props.leavePage()
  }
}




BlogPagination.propTypes = {

};

const mapStateToProps = state => {
  return {
    posts: state.firestore.ordered.posts,
    lastPost: state.blogPage.lastPost,
    sidebarNews: state.firestore.ordered.sidePosts ? state.firestore.ordered.sidePosts : []
  }
};

const mapDispatchToProps = dispatch => {
  return {
    gotoNext: payload => dispatch(gotoNext(payload)),
    gotoPrev: payload => dispatch(gotoPrev(payload)),
    leavePage: payload => dispatch(leavePage(payload)),
    clearFirestore: () => dispatch({ type: actionTypes.CLEAR_DATA })
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
        limit: 10,
        startAfter: props.lastPost[props.lastPost.length - 1]
      },
      {
        collection: 'posts',
        limit: 5,
        orderBy: ['postDate', 'desc'],
        storeAs: 'sidePosts'
      }
    ]
  }),
)(BlogPagination)
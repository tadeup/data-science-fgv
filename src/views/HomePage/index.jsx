import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Markdown from './Markdown';
import PostList from './PostsList';
import {styles} from './styles'
import logo from '../../assets/datascience_logo.jpg'
import Parallax from "../../componentsExternal/Parallax/Parallax";
import FeaturedPost from "./PostsList/FeaturedPost";

function Blog(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Parallax small filter image={logo}>
        <div className={classes.mainContainer}>
          <Grid container>
            <Grid item md={8}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom className={classes.mainHeader}>
                  NÚCLEO DE ESTUDOS EM DATA SCIENCE
              </Typography>
            </Grid>
            <Grid item md={4}>
              {/*<CardMedia className={classes.media} image={logo} alt="a"/>*/}
            </Grid>
          </Grid>
        </div>
      </Parallax>
      <div className={classes.layout}>
        <main className={classes.main}>

            <PostList/>

        </main>
      </div>
    </React.Fragment>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
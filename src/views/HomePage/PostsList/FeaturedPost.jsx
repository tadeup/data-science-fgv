import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import { withStyles } from "@material-ui/core";
import { styles } from "../styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import moment from 'moment'
import 'moment/locale/pt-br';
import {Link} from "react-router-dom";

const FeaturedPost = (props) => {
  const { post, classes } = props;
  const postDate = moment(post.postDate.toDate()).locale('pt-BR').format('DD MM YYYY');
  const RouterLink = props => {
    return <Link {...props} />;
  };
  return (
    <>
      <CssBaseline/>
      <Grid item key={post.postTitle} xs={12} md={6} className={classes.lifted}>
        <Card className={classes.featuredCard}>


          <CardActionArea className={classes.cardActionArea} to={`/posts/${post.id}`} component={RouterLink}>
            {/*to={`/posts/${post.id}`} component={RouterLink}*/}
            <Grid container style={{width: '101%'}}>
              <Grid item xs={8} >
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.postTitle}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {postDate}
                  </Typography>
                  <Typography variant="subtitle1" paragraph noWrap>
                    {post.postSubtitle}
                  </Typography>
                </CardContent>
              </Grid>

              <Grid item xs={4}>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image={post.postImgUrl}
                    title="Image title"
                  />
                </Hidden>
              </Grid>

            </Grid>
          </CardActionArea>

        </Card>
      </Grid>
    </>
  );
};

FeaturedPost.propTypes = {

};

export default withStyles(styles)(FeaturedPost)
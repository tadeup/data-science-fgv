import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { styles } from "../styles";
import moment from 'moment'
import 'moment/locale/pt-br';
import {Link} from "react-router-dom";

const PostElement = ({post, classes}) => {
  const postDate = moment(post.postDate.toDate()).locale('pt-BR').format('DD MM YYYY');
  const RouterLink = props => {
    return <Link {...props} />;
  };
  return (
    <React.Fragment>
      <Card className={classes.postWraper}>
        <CardActionArea className={classes.cardActionArea} to={`/posts/${post.id}`} component={RouterLink}>
          <Grid container>
            <Grid item xs={8} >
              <CardContent>
                <Typography component="h2" variant="h5">
                  {post.postTitle}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {postDate}
                </Typography>
                <Typography variant="subtitle1" paragraph>
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
    </React.Fragment>
  );
};

PostElement.propTypes = {
  post: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostElement);

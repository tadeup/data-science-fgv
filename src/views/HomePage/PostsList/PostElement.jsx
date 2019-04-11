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
                  {post.postBody}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4}>
              <Hidden xsDown>
                <CardMedia
                  className={classes.cardMedia}
                  component="img"
                  image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
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

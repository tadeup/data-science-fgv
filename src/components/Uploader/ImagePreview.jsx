import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';

import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { compose } from "redux";
import {changeHeader, deleteImage} from "../../views/NewPostPage/redux/actions";
import Paper from "@material-ui/core/es/Paper/Paper";
import Card from "@material-ui/core/es/Card/Card";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardActionArea from "@material-ui/core/es/CardActionArea/CardActionArea";
import withStyles from '@material-ui/core/styles/withStyles';
import GridList from "@material-ui/core/es/GridList/GridList";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from "@material-ui/core/es/Divider/Divider";
import {Link} from "react-router-dom";

const styles = theme => ({
  gridList: {
    flexWrap: 'nowrap',
  },
  card: {
    maxWidth: 100,
    maxHeight: 145,
    justifyContent: 'center'
  },
  media: {
    height: 0,
    paddingTop: '100%'
  },
  deleteButton: {
    marginTop: 2,
    marginLeft : 25
  },
  isHeader: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#00e676',
    borderStyle: 'dashed',
  }
});

function ImagePreview(props) {
  const {stagedImages} = props.newPost;
  const {classes} = props;

  const handleClick = (index) => {
    const currIndex = stagedImages.findIndex(el => el.isHeader);
    props.changeHeader(currIndex, index)
  };

  if (stagedImages.length) {
    return (
      <Paper className="container">
        <GridList className={classes.gridList} cols={2.5}>
          {stagedImages.map((el, index) => {
            return (
              <Card className={`${classes.card} ${el.isHeader ? classes.isHeader : null}`} key={index}>
                <CardActionArea onClick={() => handleClick(index)}>
                  <CardMedia
                    className={classes.media}
                    image={el.url}
                    title={el.url}/>
                </CardActionArea>
                <Divider/>
                <IconButton aria-label="Delete" className={classes.deleteButton}>
                  <DeleteIcon fontSize="small"/>
                </IconButton>
              </Card>
            )
          })}
        </GridList>
      </Paper>
    );
  } else {
    return null;
  }

}

ImagePreview.propTypes = {
  firebase: PropTypes.object.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => {
  return {
    newPost: state.newPost
  }
};

const mapDispatchToProps = dispatch => ({
  deleteImage: image => dispatch(deleteImage(image)),
  changeHeader: (currentHeaderIndex, newHeaderIndex) => dispatch(changeHeader(currentHeaderIndex, newHeaderIndex))
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  firebaseConnect(),
)(ImagePreview);
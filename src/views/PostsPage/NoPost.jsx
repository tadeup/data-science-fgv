import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid, Typography} from "@material-ui/core";

class NoPost extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{minHeight: 500}}
        >
          <Grid item>
            <Typography omponent="h2" variant="h2" style={{textAlign: 'center', lineHeight:2}}>
              PÁGINA <br/> NÃO <br/> ENCONTRADA
            </Typography>
          </Grid>
        </Grid>


      </div>
    );
  }
}

NoPost.propTypes = {};

export default NoPost;
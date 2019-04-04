import Typography from '@material-ui/core/Typography';
import React from "react";

import SimpleTable from '../../SimpleTable';
import {styles} from "./styles";
import {withStyles} from "@material-ui/core";

function DashboardView (props) {
  const classes = props.classes;
  return(
    <div>
      <Typography variant="h4" gutterBottom component="h2">
        Products
      </Typography>
      <div className={classes.tableContainer}>
        <SimpleTable/>
      </div>
    </div>
  )
}

export default withStyles(styles)(DashboardView);
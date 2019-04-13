export const styles = theme => ({
  layout: {
    width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1300 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
  },
  postBody: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,

  },
  postTitle: {
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 5,
  },
  postAuthor: {

  }
});
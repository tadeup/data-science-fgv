export const styles = theme => ({
  main: {
    // padding: '5vh 5vh 1vh',
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1300 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  paper: {
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginBottom: 2.625 + 'rem'
  },

  postInfo: {

  },

  postTitle: {
    margin: '10px 0px 30px'
  },

  sidebarGrid: {
    marginTop: theme.spacing.unit * 4
  },

  sidebarContainer: {
    padding: '10px 0px 40px 20px',
    borderLeft: '1px solid #e0e0e0',
  },
  tagsChip : {
    margin: '4px 8px 4px 0',
  }
});
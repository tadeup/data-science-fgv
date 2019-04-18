export const styles = theme => ({
  main: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
    [theme.breakpoints.up(1170 + theme.spacing.unit * 4 * 2)]: {
      width: 1080,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  pageNavigator: {
    marginTop: theme.spacing.unit * 3
  },

  paper: {
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
  },

  sidebarGrid: {
    marginTop: theme.spacing.unit * 4
  },

  sidebarContainer: {
    padding: '10px 0px 40px 20px',
    borderLeft: '1px solid #e0e0e0',
  }
});
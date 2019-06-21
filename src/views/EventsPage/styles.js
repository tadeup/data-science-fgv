export const styles = theme => ({
  main: {
    paddingTop:  theme.spacing.unit * 3,
    width: 'auto',
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
    [theme.breakpoints.up(1300 + theme.spacing.unit * 4 * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  eventListContainer: {
    marginBottom: theme.spacing.unit * 3
  },
  innerContainer: {
    marginTop: 15,
    marginBottom: 20
  }
});
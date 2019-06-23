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
    paddingTop: 20
  },
  paper: {
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
  },
  eventBody: {


  },
  eventTitle: {

  },
  eventAuthor: {

  },
  eventButton: {
    marginTop: 30
  },
  mdeEditor: {
    marginBottom: 16,
    marginTop: 8
  },

  tagsControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
});
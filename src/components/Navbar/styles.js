import { NAVBAR_HEIGHT } from "../../constants";

export const styles = theme => ({
  navGrid: {
    paddingRight: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 5,
  },

  navImage: {
    minWidth: 305,
    minHeight: 35
  },

  navTabs: {
    height: NAVBAR_HEIGHT
  },

  navList: {
    width: 250,
    paddingTop: 59
  },
});
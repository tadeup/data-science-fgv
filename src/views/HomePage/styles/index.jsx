import logo from '../../../assets/datascience_logo.jpg'
import { container, title } from "assets/jss/material-kit-react.jsx";

export const styles = theme => ({
  main: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1300 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  postWraper: {
    marginTop: 12,
    maxHeight: 190,
  },
  cardActionArea: {
    maxHeight: 190,
  },
  postsList: {
    paddingInlineStart: 0,
  },
  paragraphWraper: {
    overflowWrap: 'normal',
  },
  paper: {
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
  },
  layout: {
    position: "relative",
    zIndex: "3",
    backgroundColor: '#FAFAFA',
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    backgroundImage: `linear-gradient(to left, rgba(255,0,0,0), ${theme.palette.grey[800]}), url(${logo})`,
    height: 320,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  featuredCard: {
    display: 'flex',

  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    minHeight: 190,
  },
  featuredCardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  lifted: {
    margin: '-60px 0px 0px'
  },
  mainContainer: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  mainHeader: {
    // ...title,
    fontWeight: 500,
    margin: '-60px 0px 0px'
  },
});
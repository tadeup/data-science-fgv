import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import {firestoreConnect, firebaseConnect, isLoaded, isEmpty} from 'react-redux-firebase'
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import {
  Avatar,
  Button,
  Divider,
  ExpansionPanel, ExpansionPanelActions,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  List,
  ListItem, ListItemIcon, ListItemText, Paper,
  withStyles
} from "@material-ui/core";
import { styles } from "./styles";
import {ExpandMore as ExpandMoreIcon, LocationOn as LocationIcon, AccessTime as TimeIcon, Subject as DescriptionIcon} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Loader from "../../components/Loader/Loader";
import NoPost from "../PostsPage/NoPost";
import moment from "moment";
import ReactMarkdown from "react-markdown/with-html";

// const eventsList = [
//   {
//     eventName: 'asdf asdf asdf asdf dss',
//     eventDate: '11/10/2019 às 20:00h',
//     eventLocation: 'EESP - Sala 6002',
//     eventAddress: 'Rua Itapeva, 474 - Bela Vista; 01332-000 - São Paulo - SP - Brasil',
//     eventDescription: 'Etiam sed augue vehicula, iaculis odio nec, dignissim ex. Ut ut rhoncus nibh. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam sit amet dui sed convallis. Ut mattis molestie tortor. Cras iaculis dignissim risus, id pharetra orci malesuada non. Aliquam id erat metus. Ut imperdiet euismod sagittis. Aenean consectetur felis venenatis ligula lacinia, non convallis quam sollicitudin. Maecenas lobortis congue mauris ac tristique. Integer pulvinar nunc quis sodales vulputate. Morbi tempus, tellus a condimentum convallis, nibh elit congue purus, eget porttitor velit lacus eleifend urna. Nulla facilisi. Donec vitae tincidunt nulla, nec bibendum neque. Vivamus commodo interdum sapien, ut faucibus metus euismod at.',
//     eventProfessors: [{name: 'Rochman', description: 'Professor'}, {name: 'Tadeu', description: 'Aluno'}]
//   },
//   {eventName: 'ahdfgadsf  dfsa fwe', eventDate: '19/12/2019 às 20:00h', eventLocation: 'EESP - Sala 6002'},
//   {eventName: 'rew sdf fqqd ', eventDate: '12/11/2019 às 20:00h', eventLocation: 'EESP - Sala 6002'},
//   {eventName: 'hdfafa sdfads fdf ew  ddd l', eventDate: '21/10/2019 às 20:00h', eventLocation: 'EESP - Sala 6002'},
// ];
//
// const pastEventsList = [
//   {eventName: 'asdf asdf asdf asdf dss', eventDate: '11/10/2019 às 20:00h', eventLocation: 'FGV - EESP, Sala 6002'},
//   {eventName: 'ahdfgadsf  dfsa fwe', eventDate: '19/12/2019 às 20:00h', eventLocation: 'FGV - EESP, Sala 6002'},
//   {eventName: 'rew sdf fqqd ', eventDate: '12/11/2019 às 20:00h', eventLocation: 'FGV - EESP, Sala 6002'},
//   {eventName: 'hdfafa sdfads fdf ew  ddd l', eventDate: '21/10/2019 às 20:00h', eventLocation: 'FGV - EESP, Sala 6002'},
// ];

class _TEMPLATE extends Component {
  state = {  };

  render() {
    const {classes, eventsList} = this.props;

    if (!isLoaded(eventsList)) return <Loader/> ;
    if (isEmpty(eventsList)) return <NoPost />;

    const nowDate = new Date();

    return (
      <>
        <CssBaseline/>
        <main className={classes.main}>
          <div className={classes.eventListContainer}>
            <Typography variant={'h5'} gutterBottom>Próximos Eventos</Typography>
            {eventsList.map((el, key) => {
              const eventDate = moment(el.eventDate.toDate());
              if (eventDate.valueOf() > nowDate) {
                return (
                  <ExpansionPanel key={key}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                      >
                        <Grid item>
                          <Typography className={classes.heading}>{el.eventTitle}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            className={classes.secondaryHeading}>{eventDate.locale('pt-BR').format('DD MM YYYY [às] HH:mm')}</Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                      >
                        {el.eventLocation}
                      </Grid>

                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="stretch"
                      >
                        <Grid item>
                          <Typography variant="caption" gutterBottom>Local</Typography>
                          <Divider/>
                          <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            className={classes.innerContainer}
                          >
                            <Grid item style={{paddingRight: 15}}>
                              <LocationIcon/>
                            </Grid>
                            <Grid item>
                              <Typography variant="button">{el.eventLocation}</Typography>
                              <Typography variant="overline" style={{lineHeight: 1}}>{el.eventAddress}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption" gutterBottom>Data</Typography>
                          <Divider/>
                          <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            className={classes.innerContainer}
                          >
                            <Grid item style={{paddingRight: 15}}>
                              <TimeIcon/>
                            </Grid>
                            <Grid item>
                              <Typography variant="button"
                                          gutterBottom>{eventDate.locale('pt-BR').format('DD MM YYYY [às] HH:mm')}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption" gutterBottom>Descrição</Typography>
                          <Divider/>
                          <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            className={classes.innerContainer}
                          >
                            <Grid item style={{paddingRight: 15}}>
                              <DescriptionIcon/>
                            </Grid>
                            <Grid item style={{maxWidth: '80%'}}>
                              {/*<Typography variant="subtitle1" align={'justify'} gutterBottom>{el.eventBody}</Typography>*/}
                              <ReactMarkdown source={el.eventBody} escapeHtml={false}/>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption" gutterBottom>Participantes</Typography>
                          <Divider/>
                          <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            className={classes.innerContainer}
                          >
                            <Grid item style={{paddingRight: 15}}>
                              <List className={classes.root}>
                                {el.eventProfessors && el.eventProfessors.map((professor, key) => {
                                  return (
                                    <ListItem>
                                      <Avatar>
                                        {professor.name.charAt(0)}
                                      </Avatar>
                                      <ListItemText primary={professor.name} secondary={professor.description}/>
                                    </ListItem>
                                  )
                                })}
                              </List>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </ExpansionPanelDetails>
                    <Divider/>
                    <ExpansionPanelActions>
                      {el.eventRegistration ? <Button size="small" color="primary" href={el.eventRegistration}>Participar</Button> : <Button size="small" color="primary" disabled>Participar</Button>}
                    </ExpansionPanelActions>
                  </ExpansionPanel>
                )
              } else {
                return null
              }
            })}
          </div>

          <div className={classes.eventListContainer}>
            <Typography  variant={'h5'} gutterBottom>Eventos Passados</Typography>
            {eventsList.map((el, key) => {
              const eventDate = moment(el.eventDate.toDate());
              if (eventDate.valueOf() < nowDate) {
                return(
                  <ExpansionPanel key={key}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                      >
                        <Grid item>
                          <Typography className={classes.heading}>{el.eventTitle}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography className={classes.secondaryHeading}>{eventDate.locale('pt-BR').format('DD MM YYYY [às] HH:mm')}</Typography>
                        </Grid>

                      </Grid>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                      >
                        {el.eventLocation}
                      </Grid>

                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="stretch"
                      >
                        <Grid item>
                          <Typography variant="caption" gutterBottom>Local</Typography>
                          <Divider/>
                          <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            className={classes.innerContainer}
                          >
                            <Grid item style={{paddingRight: 15}}>
                              <LocationIcon/>
                            </Grid>
                            <Grid item>
                              <Typography variant="button">{el.eventLocation}</Typography>
                              <Typography variant="overline" style={{lineHeight:1}}>{el.eventAddress}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption" gutterBottom>Data</Typography>
                          <Divider/>
                          <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            className={classes.innerContainer}
                          >
                            <Grid item style={{paddingRight: 15}}>
                              <TimeIcon/>
                            </Grid>
                            <Grid item>
                              <Typography variant="button" gutterBottom>{eventDate.locale('pt-BR').format('DD MM YYYY [às] HH:mm')}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption" gutterBottom>Descrição</Typography>
                          <Divider/>
                          <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            className={classes.innerContainer}
                          >
                            <Grid item style={{paddingRight: 15}}>
                              <DescriptionIcon/>
                            </Grid>
                            <Grid item style={{maxWidth: '80%'}}>
                              {/*<Typography variant="subtitle1" align={'justify'} gutterBottom>{el.eventBody}</Typography>*/}
                              <ReactMarkdown source={el.eventBody} escapeHtml={false}/>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption" gutterBottom>Participantes</Typography>
                          <Divider/>
                          <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            className={classes.innerContainer}
                          >
                            <Grid item style={{paddingRight: 15}}>
                              <List className={classes.root}>
                                {el.eventProfessors && el.eventProfessors.map((professor, key) => {
                                  return(
                                    <ListItem>
                                      <Avatar>
                                        {professor.name.charAt(0)}
                                      </Avatar>
                                      <ListItemText primary={professor.name} secondary={professor.description} />
                                    </ListItem>
                                  )
                                })}
                              </List>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                )
              } else {
                return null
              }
            })}
          </div>

        </main>
      </>
    );
  }
}

_TEMPLATE.propTypes = {

};

const mapStateToProps = state => {
  return {
    eventsList: state.firestore.ordered.events,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clearFirestore: () => dispatch({ type: '@@reduxFirestore/CLEAR_DATA' })
  }
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
      return [
        {
          collection: 'events',
          orderBy: ['eventDate', 'desc'],
        },
      ]
    }
  ),
)(_TEMPLATE)
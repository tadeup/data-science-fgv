import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormContent from './FormContent';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(900 + theme.spacing.unit * 2 * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
});

class Checkout extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 10,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 10,
        }));
    };

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            FGV FORM
                        </Typography>
                        <LinearProgress variant={'determinate'} value={activeStep}/>
                        <React.Fragment>
                            <FormContent />
                            <div className={classes.buttons}>
                                {activeStep !== 0 && (
                                    <Button onClick={this.handleBack} className={classes.button}>
                                        Back
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleNext}
                                    className={classes.button}
                                >
                                    Next
                                </Button>
                            </div>
                        </React.Fragment>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

Checkout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);
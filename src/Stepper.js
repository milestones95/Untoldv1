import * as React from 'react';
import Box from '@material-ui/core/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import OnboardingCardCheating from "./OnboardingCardCheating"
import OrientationCardCheating from "./OrientationCardCheating"
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { Redirect } from "react-router-dom";

const steps = [1,2];

const useStyles = makeStyles(theme => ({
  root: {
    marginRight: theme.spacing(8),
    marginLeft: theme.spacing(8),
    align: "center"
  },
  stepper: {
    marginTop: theme.spacing(8),
  },
  avatar: {
    marginTop: theme.spacing(8),
    backgroundColor: theme.palette.secondary.main,
    marginLeft: theme.spacing(6),
  },
  button: {
    // marginLeft: theme.spacing(90),
  },
}));

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const completedOnboarding = () => {
    alert("hi there")
  };

  const classes = useStyles();

  var onboardingCardType = {
    1: <OnboardingCardCheating  event={handleNext}/>,
    2: <OrientationCardCheating event={completedOnboarding} link={"/"}/>,
   }

  return (

    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12} sm={12}>
      <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        <div align="center">
        <AccessAlarmIcon color="primary" className={classes.avatar}/>
        </div>
       </Grid>
      <Grid item xs={12} sm={12} className={classes.stepper}>
      <div align="center">
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={"label"} {...stepProps}>
                  <StepLabel></StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} style={{textAlign: "center"}}>
        <Typography variant="h5">
           Tell us what type of story you would you like
        </Typography>
       </Grid>
      <Grid item xs={12} sm={12}>
        {onboardingCardType[activeStep + 1]}
      </Grid>
      <Grid item xs={12} sm={12}>
          <div align="center">
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              className={classes.button}
            >
              Back
            </Button>
          </div>
      </Grid>
      </div>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

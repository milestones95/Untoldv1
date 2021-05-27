import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import ContactCard from './ContactCard'
import NyomiStoryAndReview from './NyomiStoryAndReview'
import ReviewComponent from './ReviewComponent'
import HowItWorks from './HowItWorks'
import Divider from '@material-ui/core/Divider';
import JumboTron from './JumboTron';

const useStyles = makeStyles(theme => ({
  contactCard: {
    marginTop: theme.spacing(10)
  },
}));

export default function HorizontalLinearStepper() {
  const classes = useStyles();

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Navbar />
         </Grid>
         <Grid item xs={12} sm={12} className={classes.contactCard}>
           <JumboTron />
         </Grid>
         <Grid item xs={12} sm={12} className={classes.contactCard}>
           <ReviewComponent />
         </Grid>
          <Grid item xs={12} sm={12} className={classes.contactCard}>
            <NyomiStoryAndReview />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant="h6" >
              Everything you need for $99 a month
            </Typography>
            <Typography variant="subtitle1" >
              Includes every feature we offer plus unlimited projects and unlimited users.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <div align="left">
              <Button variant="contained" color="primary">
                Get started today
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div align="center">
             <Divider light />
              <HowItWorks />
            </div>
          </Grid>
        <Grid item xs={12} sm={12}>
          <div align="center">
            <ContactCard />
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Footer />
        </Grid>
      </Grid>
    )
  };

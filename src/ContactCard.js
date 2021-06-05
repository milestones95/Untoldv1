import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    background: "#4338cb",
    width: "70%",
    textColor: "white"
  },
  text: {
    color: "white",
  },
  input: {
    background: "white",
  },
  textField: {
    width: "100%",
  }
}));

export default function ContactCard () {
  const classes = useStyles();

  return (
  <Card variant="outlined" className={classes.root}>
    <CardContent>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={4} className={classes.text}>
        <div align="left">
          <Typography variant="h6" >
            Want product news and updates?
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={4} className={classes.textField}>
        <div align="right">
          <form noValidate autoComplete="off">
            <TextField
                  id="outlined-basic"
                  value="Enter your email"
                  variant="outlined"
                  InputProps={{
                    className: classes.input,
                  }}
            />
          </form>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div align="left">
          <Button variant="contained" color="primary">
            Notify me
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div align="left">
          <Typography color="textSecondary" variant="subtitle1" className={classes.text}>
            Sign up for our newsletter to stay up to date.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div align="left">
          <Typography color="textSecondary" variant="subtitle1" className={classes.text}>
            We care about the protection of your data. Read our Privacy Policy.
          </Typography>
        </div>
      </Grid>
      </Grid>
   </CardContent>
  </Card>
  )
}

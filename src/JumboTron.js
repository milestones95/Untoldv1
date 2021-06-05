import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  root: {
    background: "grey"
  }
}));

export default function ContactCard () {
  const classes = useStyles();

  return (
      <Grid container spacing={3} direction="columns" className={classes.root}>
        <Grid item xs={12} sm={12}>
          <div align="center">
            <Typography variant="h2">
              Direct your fantasy
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div align="center">
            <Typography>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div align="center" className={classes.buttons}>
            <Button variant="contained">Get started</Button>
            <Button variant="contained" color="primary">
              Become A Writer
            </Button>
          </div>
        </Grid>
      </Grid>
  )
}

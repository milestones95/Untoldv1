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
  },
  msg: {
    marginLeft: theme.spacing(45),
    marginRight: theme.spacing(45),
  },
  fantasy: {
    marginLeft: theme.spacing(1.5),
  },
  direct: {
    marginLeft: theme.spacing(3),
  }
}));

export default function ContactCard () {
  const classes = useStyles();

  return (
      <Grid container spacing={3} direction="columns" className={classes.root}>
        <Grid container item xs={12} sm={12} alignContent="center">
          <Grid item xs={12} sm={6}>
            <div align="right">
              <Typography variant="h2" className={classes.direct}>
                Direct your
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div align="left">
              <Typography variant="h2" style={{"color": "purple"}} className={classes.fantasy}>
                 fantasy
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div align="center" className={classes.msg}>
            <Typography>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div align="center" className={classes.buttons}>
            <Button variant="contained" color="primary">Get started</Button>
            <Button variant="contained">
              Become A Writer
            </Button>
          </div>
        </Grid>
      </Grid>
  )
}

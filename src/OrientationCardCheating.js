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

const useStyles = makeStyles(theme => ({
  card: {
    width: "60%",
    "&:hover": {
      borderColor: "blue !important"
    }
  },
  firstCard: {

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function OrientationCardCheating (props) {
  const classes = useStyles();

  return (
     <Grid container spacing={1}>
     <Grid item xs={12} sm={12} style={{textAlign: "center"}}>
       <Typography variant="h6" color="textSecondary">
          What's your orientation?
       </Typography>
      </Grid>
      <Grid item xs={12} sm={12} className={classes.firstCard}>
      <div align="center">
        <Link onClick={props.event} href={props.link} underline="none">
          <Card className={classes.card} variant="outlined" style={{textAlign: "left"}}>
            <CardContent>
              <Typography variant="h6">
                Male, Male
              </Typography>
            </CardContent>
          </Card>
        </Link>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} className={classes.firstCard}>
      <div align="center">
        <Link onClick={props.event} href={props.link} underline="none">
          <Card className={classes.card} variant="outlined" style={{textAlign: "left"}}>
            <CardContent>
              <Typography variant="h6">
                Male, Female
              </Typography>
            </CardContent>
          </Card>
        </Link>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} className={classes.firstCard}>
      <div align="center">
        <Link onClick={props.event} href={props.link} underline="none">
          <Card className={classes.card} variant="outlined" style={{textAlign: "left"}}>
            <CardContent>
              <Typography variant="h6">
                Female, Female
              </Typography>
            </CardContent>
          </Card>
        </Link>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} className={classes.firstCard}>
      <div align="center">
        <Link onClick={props.event} href={props.link} underline="none">
          <Card className={classes.card} variant="outlined" style={{textAlign: "left"}}>
            <CardContent>
              <Typography variant="h6">
                Female, Male
              </Typography>
            </CardContent>
          </Card>
        </Link>
        </div>
      </Grid>
    </Grid>
  )
}

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
  cards: {
    marginTop: theme.spacing(7),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function OnboardingCardCheating (props) {
  const classes = useStyles();

  return (
     <Grid container spacing={1}>
     <Grid item xs={12} sm={12} style={{textAlign: "center"}}>
       <Typography variant="h6" color="textSecondary">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
       </Typography>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.cards}>
      <div align="center">
        <Link onClick={props.event} underline="none">
          <Card className={classes.card} variant="outlined" style={{textAlign: "left"}}>
            <CardContent>
              <Typography variant="h6" >
                Cheating On Partner
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                You will cheat on your partner in this story
              </Typography>
            </CardContent>
          </Card>
        </Link>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.cards}>
        <div align="center">
        <Link onClick={props.event} underline="none">
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography variant="h6">
                Getting Cheating On
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                You will be cheated on by your partner in this story
              </Typography>
            </CardContent>
          </Card>
        </Link>
        </div>
      </Grid>
    </Grid>
  )
}

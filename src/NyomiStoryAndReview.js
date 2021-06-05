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
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    background: "transparent",
    width: "90%",
    textColor: "white",
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  text: {
    color: "black",
    marginDown: theme.spacing(0)
  },
  input: {
    background: "white",
  },
  textField: {
    width: "100%",
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  cardStyles: {
    borderWidth: 0, // Remove Border
    shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow IOS
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0, // This is for Android
    background: "transparent"
  }
}));

export default function ContactCard () {
  const classes = useStyles();

  return (
  <Card variant="outlined" className={classes.cardStyles}>
    <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} className={classes.text}>
          <div align="left">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
          </div>
        </Grid>
        <Grid item xs={12} sm={8} className={classes.text}>
          <div align="left">
            <Typography variant="h6" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
            </Typography>
            <Typography variant="h6" >
              Judith Black
            </Typography>
            <Typography variant="h6" >
              CEO, Tuple
            </Typography>
            <Link variant="h6" href="/examplestory">
              Read her story
            </Link>
          </div>
        </Grid>
      </Grid>
   </CardContent>
  </Card>
  )
}

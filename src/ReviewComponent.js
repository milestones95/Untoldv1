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
import IconButton from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    background: "grey",
    width: "90%",
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    marginLeft: theme.spacing(78),
  },
  text: {
    color: "black",
  },
  input: {
    background: "white",
  },
  textField: {
    width: "100%",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  cardStyles: {
    borderWidth: 0, // Remove Border
    shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow IOS
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0 ,// This is for Android,
    background: "grey"
  }
});


class ReviewComponent extends React.Component {

  constructor(props){
    super(props)

    // Set initial state
    this.state = {msg : 'Hi, There!'}

  }

  pressAvatar1 = () => {

   // Changing state
    this.setState({msg : 'Pressed Avatar One'})
   }

   pressAvatar2 = () => {

    // Changing state
     this.setState({msg : 'Pressed Avatar two'})
    }

    pressAvatar3 = () => {

     // Changing state
      this.setState({msg : 'Pressed Avatar three'})
     }



  render() {
    const { classes } = this.props;

    return (
      <Card variant="outlined" direction="column" className={classes.cardStyles}>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <div align="center">
            <Typography variant="h6" >
              Why our reader’s love us
            </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div align="center">
            <Typography variant="h6" >
              {this.state.msg}
            </Typography>
            </div>
          </Grid>
            <Grid item xs={12} sm={12}>
              <div className={classes.root}>
                <Link onClick={this.pressAvatar1} underline="none">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
                </Link>
                <Link onClick={this.pressAvatar2} underline="none">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
                </Link>
                <Link onClick={this.pressAvatar3} underline="none">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
                </Link>
              </div>
            </Grid>
          </Grid>
      </Card>
      )
    }
  }

  export default withStyles(styles)(ReviewComponent);

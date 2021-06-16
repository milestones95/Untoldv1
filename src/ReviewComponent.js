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
  icons: {

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
  },
  msg: {
    marginLeft: theme.spacing(45),
    marginRight: theme.spacing(45),
  }
});


class ReviewComponent extends React.Component {

  constructor(props){
    super(props)

    // Set initial state
    this.state = {
                  msg : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. \
                   Nemo expedita voluptas culpa sapiente alias molestiae. \
                   Numquam corrupti in laborum sed rerum et corporis.'
                 }

    }

  render() {
    const { classes } = this.props;

    return (
      <Card variant="outlined" direction="column" className={classes.cardStyles}>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <div align="center">
            <Typography variant="h6" style={{"color": "purple"}}>
              Why our reader’s love us
            </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div align="center" className={classes.msg}>
            <Typography variant="h5" >
              {this.state.msg}
            </Typography>
            </div>
          </Grid>
            <Grid container item xs={12} sm={12} alignContent="center">
              <Grid item xs={12} sm={6}>
               <div align="right">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div align="left">
                  <Typography variant="subtitle1">
                    Judith Black
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
      </Card>
      )
    }
  }

  export default withStyles(styles)(ReviewComponent);

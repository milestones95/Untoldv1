import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "../ButtonAppBarCollapse";
import Grid from '@material-ui/core/Grid';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { supabase } from "../api/supabaseClient";
import { useAuth } from '../Auth/Auth'
import { useHistory } from 'react-router-dom'

const drawerWidth = 220;

const styles = theme => ({
  root: {
    position: "static",
  },
  buttonBar: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    position: "fixed",
    width: "100%",
    height: "7%",
    background: "#000000",
  },
  buttonBarText: {
    marginTop: theme.spacing(1.5),
  },
  signUpButton: {
    marginTop: theme.spacing(1),
  },
  links: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    marginTop: theme.spacing(1.5),
  },
  menuIcon: {
    marginTop: theme.spacing(1.5),
  },
  dropDownMenuItem: {
    textAlign: "left",
    marginLeft: theme.spacing(2),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  horizontalButtonBar: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    position: "fixed",
    width: "5%",
    height: "100%",
    background: "#000000",
    marginRight: theme.spacing(5)
  },
});

const AuthContext = React.createContext()

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function NavBarButton() {

  const { user, signOut } = useAuth()
  const history = useHistory()

  async function handleSignOut() {
    // Ends user session
    await signOut()
    history.push('/login')
  }

  // console.log(user);
  if (user) {
    return (
      <Button variant="contained" color="secondary" onClick={handleSignOut}
        >Sign Out</Button>
    )
  }
  else{
    return (
      <Button variant="contained" color="secondary" href="/signup">Sign Up</Button>
    )
  }
}

function DisableLoginButton() {

  const { user } = useAuth()

  // console.log(user);
  if (!(user)) {
    return (
      <Link href="/login">Sign In</Link>
    )
  }
  else{
    return (
      null
    )
  }
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const WriterNavbar = props => (
  <ElevationScroll {...props}>
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <Grid container rows spacing={3}>
        <Grid item xs={12} className={props.classes.dropDownMenuItem}>
          <Link href="/WriterUploadStory">Home</Link>
        </Grid>
        <Grid item xs={12} className={props.classes.dropDownMenuItem}>
          <Link href="/wRequests">Requests</Link>
        </Grid>
        <Grid item xs={12} className={props.classes.dropDownMenuItem}>
          <Link href="/wProfile">Profile</Link>
        </Grid>
        <Grid item xs={12} className={props.classes.dropDownMenuItem}>
          <Link href="/writerLibrary">Library</Link>
        </Grid>
        {/* <Grid item xs={12} className={props.classes.dropDownMenuItem}>
          <Link href="/WriterUploadStory">Home</Link>
        </Grid> */}
        {/* <Grid item xs={12} className={props.classes.dropDownMenuItem}>
          <Link href='#'>How It Works</Link>
        </Grid>
        <Grid item xs={12} className={props.classes.dropDownMenuItem}>
          <Link href='/examplestory'>Example Story</Link>
        </Grid> */}
        <Grid item xs={12} className={props.classes.dropDownMenuItem}>
          {DisableLoginButton()}
        </Grid>
        <Grid item xs={12}>
          {NavBarButton()}
        </Grid>
      </Grid>
    </ButtonAppBarCollapse>
      <Grid container direction="column">
        <div className={props.classes.horizontalButtonBar} id="appbar-collapse">
        <Grid item lg={2} sm={2} className={props.classes.menuIcon}>
          < MenuIcon color="primary"/>
        </Grid>
        <Grid item lg={8} sm={8} style={{textAlign: "center"}}>
          <Typography className={props.classes.links}>
            <Link href="/WriterUploadStory" >Home</Link>
            {/* <Link href='#'>How It Works</Link>
            <Link href='/examplestory'>Example Story</Link> */}
          </Typography>
        </Grid>
        <Grid item lg={8} sm={8} style={{textAlign: "center"}}>
          <Typography className={props.classes.links}>
            <Link href="/wRequests" >Requests</Link>
            {/* <Link href='#'>How It Works</Link>
            <Link href='/examplestory'>Example Story</Link> */}
          </Typography>
        </Grid>
        <Grid item lg={8} sm={8} style={{textAlign: "center"}}>
          <Typography className={props.classes.links}>
            <Link href="/wProfile" >Profile</Link>
            {/* <Link href='#'>How It Works</Link>
            <Link href='/examplestory'>Example Story</Link> */}
          </Typography>
        </Grid>
        <Grid item lg={8} sm={8} style={{textAlign: "center"}}>
          <Typography className={props.classes.links}>
            <Link href="/writerLibrary" >Library</Link>
            {/* <Link href='#'>How It Works</Link>
            <Link href='/examplestory'>Example Story</Link> */}
          </Typography>
        </Grid>
        <Grid item lg={1} sm={1}>
              <Typography className={props.classes.links}>
                {DisableLoginButton()}
              </Typography>
        </Grid>
        <Grid item lg={1} sm={1} style={{textAlign: "left"}} className={props.classes.signUpButton}>
          {NavBarButton()}
        </Grid>
      </div>
      </Grid>
  </div>
  </ElevationScroll>
);

export default withStyles(styles)(WriterNavbar);

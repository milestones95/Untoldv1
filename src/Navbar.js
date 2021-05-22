import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, MenuItem } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import Grid from '@material-ui/core/Grid';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Footer from "./Footer";
import Box from '@material-ui/core/Box';

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
    background: "#ffffff",
  },
  links: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  dropDownMenuItem: {
    textAlign: "left",
    marginLeft: theme.spacing(2),
  }
});

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

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Navbar = props => (
  <ElevationScroll {...props}>
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <Grid container rows spacing={3}>
        <Grid item xs={12} className={props.classes.dropDownMenuItem}>
          <Link href="/">Home</Link>
        </Grid>
        <Grid item xs={12} className={props.classes.dropDownMenuItem}>
          <Link href='#'>How It Works</Link>
        </Grid>
        <Grid item xs={12} className={props.classes.dropDownMenuItem}>
          <Link href='/examplestory'>Example Story</Link>
        </Grid>
        <Grid item xs={12} className={props.classes.dropDownMenuItem}>
          <Link href="/login">Sign In</Link>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" href="/signup" style={{
              width: "100%",
              height: "100%"
            }}>SignUp</Button>
        </Grid>
      </Grid>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
      <Grid container>
        <Grid item lg={2} sm={2}>
          < MenuIcon />
        </Grid>
        <Grid item lg={8} sm={8} style={{textAlign: "center"}}>
          <Typography className={props.classes.links}>
            <Link href="/" >Home</Link>
            <Link href='#'>How It Works</Link>
            <Link href='/examplestory'>Example Story</Link>
          </Typography>
        </Grid>
        <Grid item lg={1} sm={1}>
              <Typography className={props.classes.links}>
                 <Link href="/login">Sign In</Link>
              </Typography>
        </Grid>
        <Grid item lg={1} sm={1} style={{textAlign: "left"}}>
          <Button variant="contained" color="secondary" href="/signup">SignUp</Button>
        </Grid>
        </Grid>
    </div>
  </div>
  </ElevationScroll>
);

export default withStyles(styles)(Navbar);

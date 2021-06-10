import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import { useAuth } from '../Auth/Auth'

const useStyles = makeStyles(theme => ({
  "footer": {
    position: "static",
    width: "100%",
    bottom: "0",
    background: "transparent",
    boxShadow: 'none',
    marginTop: theme.spacing(10)
  },

}));

const AuthContext = React.createContext()

function DisplayNonLoggedInButtons() {

  const { user } = useAuth()

  if (!(user)) {
      return (
          <Grid container item sm={2} xs={12} direction="row">
            <Grid item sm={6} xs={12}>
              <Link href="/login" color="secondary">Sign In</Link>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Link href="/signup" color="secondary">SignUp</Link>
            </Grid>
          </Grid>
      )
    }
    else{
      return (
        null
      )
    }
}

export default function Footer() {

    const classes = useStyles();

    return (
        <AppBar color="primary" className={classes.footer}>
          <Container maxWidth="md">
            <Toolbar>
              <Grid container spacing={3}  alignItems="center"  justify="center">
                  <Grid item sm={12} xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item sm={2} xs={12}>
                    <Link href="/" color="secondary">Home</Link>
                  </Grid>
                  <Grid item sm={2} xs={12}>
                    <Link href='#' color="secondary">How It Works</Link>
                  </Grid>
                  <Grid item sm={2} xs={12}>
                    <Link href='/examplestory' color="secondary">Example Story</Link>
                  </Grid>
                  {DisplayNonLoggedInButtons()}
                  <Grid item sm={12} xs={12}>
                    <Typography color="primary" align="center">
                      © 2020 Untold-Ink, Inc. All rights reserved.
                    </Typography>
                  </Grid>
                </Grid>
            </Toolbar>
          </Container>
         </AppBar>
    )
}

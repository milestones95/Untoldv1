import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "footer": {
    position: "static",
    width: "100%",
    bottom: "0",
    background: "white",
    boxShadow: 'none',
  }
}));

export default function Footer() {

    const classes = useStyles();

    return (
        <AppBar color="primary" className={classes.footer}>
          <Container maxWidth="md">
            <Toolbar>
              <Grid container spacing={3}  alignItems="center"  justify="center">
                  <Grid item xs={2}>
                    <Link href="/" color="secondary">Home</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <Link href='#' color="secondary">How It Works</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <Link href='/examplestory' color="secondary">Example Story</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <Link href="/login" color="secondary">Sign In</Link>
                  </Grid>
                  <Grid item xs={2}>
                    <Link href="/signup" color="secondary">SignUp</Link>
                  </Grid>
                </Grid>
            </Toolbar>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography color="primary" align="center">
                  © 2020 Untold-Ink, Inc. All rights reserved.
                </Typography>
              </Grid>
            </Grid>
          </Container>
         </AppBar>
    )
}

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

export default function Footer() {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Grid container spacing={3}>
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
                © 2020 Untold-Ink, Inc. All rights reserved.
              </Grid>
            </Grid>
          </Container>
        </AppBar>
    )
}

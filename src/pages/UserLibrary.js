import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navbar from "../templates/Navbar";
import Footer from "../templates/Footer";

export default function Profile() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
      <Navbar />
      </Grid>
        <p>Hi miles</p>
      <Grid item xs={12}>
      <Footer />
      </Grid>
    </Grid>
  );
}

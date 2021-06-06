import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { supabase } from "./api/supabaseClient";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root:{
    marginTop: theme.spacing(8),
  },
}));

function loopThrough (response) {
  if (response) {
    return (
      response.map(writer => <Typography>{writer.email}</Typography>)
    )
  }
  return (
    <Typography>Hi There</Typography>
  )
}
export default function BrowsePage() {
  const classes = useStyles();
  const [listOfWriters, setListOfWriters] = useState(null);

  const fetchData = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('*')

        setListOfWriters(data)
    }

  return (
    <Grid container spacing={3}>
      <Grid item sm={12}>
      <Navbar />
      </Grid>
      <Grid item xs={12} className={classes.root}>
        {loopThrough(listOfWriters)}
        <button onClick={fetchData}>
          Fetch Data
        </button>
      </Grid>
      <Grid item sm={12}>
      <Footer />
      </Grid>
    </Grid>
  );
}

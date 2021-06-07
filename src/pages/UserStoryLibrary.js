import React, { useContext, useState, useEffect } from 'react'
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navbar from "../templates/Navbar";
import Footer from "../templates/Footer";
import { supabase } from "../api/supabaseClient";
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../Auth/Auth'

import { Redirect } from "react-router";

export default function UserStoryLibrary() {

  // const userStories
  const readStories =  async () => {
    console.log("hi");
     try {
       let { data, error } = await supabase
           .from('user_story')
           .select('*')
           .eq('user_id', session?.user.id)

           console.log(data);
     } catch (err) {
       console.error(err);
     }
   }

  const session = supabase.auth.session()

  if (!session) {
    // console.log("hello");
    return <Redirect to="/login" />;
  }
  else{
    readStories()
  }

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

import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getCategoryIds, getWriters, getCategoryNames } from "./api/helperFunctions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root:{
    marginTop: theme.spacing(8),
  },
}));

async function concat(listOne, listTwo) {
  return listOne.concat(listTwo);
}

const useWriterList = () => {
  const [listOfWriters, setListOfWriters] = useState([]);
  useEffect(async () => {
    try {
      // var test2 = await getWriters()
      // setListOfWriters(test2)

        var test = await getWriters().then(
          function(response) {
            var fakelist = []
            for (var i = 0; i < response.length; i++) {
              var writersTag = {}
              writersTag = {
                    'username': response[i].username,
                    'quote': response[i].quote,
                    'categories': response[i].categories
                  }
              fakelist.push(writersTag)
                }
                setListOfWriters(fakelist)
              }
            )
    } catch (e) {console.log('error', e)}
  }, {});
  return listOfWriters;
};

export default function BrowsePage() {

  const classes = useStyles();
  const listOfWriters = useWriterList();
  console.log("test me: ",listOfWriters)

  return (
    <Grid container spacing={3}>
      <Grid item sm={12}>
      <Navbar />
      </Grid>
      <Grid item xs={12} className={classes.root}>
      {listOfWriters.map(writer => (
        <div>
          <p>Username: {writer.username}</p>
          <br />
          <p>Bio: {writer.quote}</p>
          <br />
            <br />
            <p>Categories: {writer.categories.map(category => (category.concat(' ')))}</p>
            <br />
        </div>
      ))}

      </Grid>
      <Grid item sm={12}>
      <Footer />
      </Grid>
    </Grid>
  );
}
